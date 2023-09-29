import { useCart } from "../Context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, removeItem, total} = useCart()
    return (
        <>
         <h1>Cart</h1>
         <section>
            {
                cart.map(prod=> {
                    return (
                        <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-around'}}>
                            <h2>{prod.name}</h2>
                            <button onClick={()=> removeItem(prod.id)}>remove</button>
                        </div>
                    )
                })
            }
         </section>
         <h2>Total: ${total}</h2>
         <Link to='/checkout'>Checkout</Link>
        
        </>
    )
}

export default Cart 