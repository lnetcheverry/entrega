import cart from './assets/cart.svg'
import classes from './CardWidget.module.css'


const CardWidget = () => {
    return (
        <button className={classes.button}>
            <img className={classes.imgCart} src={cart}/>
            0

        </button>
    )
}

export default CardWidget