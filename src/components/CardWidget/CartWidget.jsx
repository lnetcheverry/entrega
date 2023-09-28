import cart from './assets/cart.svg'
import { useCart } from '../Context/CartContext'
import classes from './CartWidget.module.css'


const CartWidget = () => {

    const { totalQuantity} = useCart ()
    return (
        <button className={classes.button}>
            <img className={classes.imgCart} src={cart}/>
            {totalQuantity}

        </button>
    )
}

export default CartWidget