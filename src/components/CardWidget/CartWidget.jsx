import cart from './assets/cart.svg'
import { useCart } from '../Context/CartContext'
import classes from './CartWidget.module.css'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity} = useCart ()
    const navigate = useNavigate()

    return (
        <button className={classes.button} onClick={() => navigate ('/cart')}>
            <img className={classes.imgCart} src={cart}/>
            {totalQuantity}

        </button>
    )
}

export default CartWidget