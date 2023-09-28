import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { useCart } from "../Context/CartContext"
import { Link } from 'react-router-dom'

import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'

/* const ItemDetail = ({ name, img, price, description, stock}) => {
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (quantity) => {
        console.log('agregado' + quantity)
        setQuantity(quantity)
        
    }
return (

    <div>
        <h1 className={classes.h1}>{name}</h1>
        <img src={img} style={{ width:400}} /> 
        <h3>${price}</h3>
        <h3>{description}</h3>
        {
            quantity == 0 ? (
        <ItemCount stock={stock} onAdd={handleOnAdd}/>
            ) : (
                <button>Finalizar Compra</button>
            )    
        }
        
    
    </div>
)
}
export default ItemDetail */

const InputCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description,  }) => {
    const [inputType, setInputType] = useState('button')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem } = useCart( CartContext)
    //const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        //setNotification('error', `Se agregaron correctamente ${quantity} ${name} al carrito`)
        console.log('agregue al carrito: ', quantity)

        setQuantity(quantity)
    }

    return (
        <article>
          {/*   <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button> */}
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail