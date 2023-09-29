import { useCart } from "../Context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../service/firebaseConfing"

const Checkout = () => {
     const { cart, total } = useCart()

     const createOrder = async() => {
     const objOrder = {
          buyer: {    
          name: 'Leonardo Etcheverry',
          phone: '15531688',
          email: 'leo.etcheverry16@gmail.com'
        },
       items: cart,
       total
   }   

    const batch = writeBatch(db)
    const outOfStock = []

   const ids = cart.map(prod => prod.id)
   console.log(ids)

   const productsRef = query(collection( db, 'products'), where(documentId(), 'in', ids))
    
    const { docs } = await getDocs(productsRef)

         docs.forEach(doc => {
            const fields = doc.data()
            const stockDb = fields.stock

            const productAddedToCart = cart.find(prod => prod.id == doc.id)
            const prodQuantity = productAddedToCart?.quantity 

            if(stockDb >= prodQuantity) {
                batch.up(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({ id: doc.id, ...fields})
            }
        })
     
        if(outOfStock.length==0) {
             const orderRef = collection(db, 'orders')

            const { id: orderId} = await addDoc(orderRef,objOrder)

             batch.commit()

             console.log('el numero de orden  es: ' + orderId)

        } else {
        console.error('fuera de stock ')
        }
    }
     
    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden</button>        
        </>
    )
}


export default Checkout