import { useState } from "react"
import classes from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState (1)


    return (

        <div>
            <h4>1</h4>
            <button className={classes.button}>-</button>
            <button className={classes.button} onClick={()=> onAdd (count)}>Agregar al carrito</button>
            <button className={classes.button}>+</button>

        </div>
    )
}

export default ItemCount