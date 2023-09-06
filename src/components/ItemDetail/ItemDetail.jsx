import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css'

const ItemDetail = ({ name, img, price, description, stock}) => {
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
export default ItemDetail