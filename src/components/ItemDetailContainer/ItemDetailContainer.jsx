import { useEffect, useState } from "react"
//import { getProductById } from "../../asincMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from "./ItemDetailContainer.module.css"
import { db } from "../../service/firebaseConfing"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams ()

    useEffect(() => {
        setLoading(true)      
        
        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
            .then(documentSnapshot => {
                const fields = documentSnapshot.data()
                const productAdapted = {id: documentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

       /*  getProductById(productId)
         .then(res => {
            setProduct(res)
         })
         .catch(error => {
            console.error(error)
         })
         .finally(() => {
            setLoading(false)
         }) */

    }, [productId])

    if(loading) {
        return <h1>Cargando producto</h1>
    }

    return(
        <div>
            <h1 className={classes.h1}>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer