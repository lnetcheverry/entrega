import { useState } from "react"
import classes from './ItemCount.module.css'

const ItemCount = ({ stock, onAdd}) => {
    const [count, setCount] = useState (1)

    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    return (

        <div>
            <h4>{ count}</h4>
            <button className={classes.button} onClick={decrement} >-</button>
            <button className={classes.button} onClick={()=> onAdd (count)}>Agregar al carrito</button>
            <button className={classes.button} onClick={increment}>+</button>

        </div>
    )
}

export default ItemCount