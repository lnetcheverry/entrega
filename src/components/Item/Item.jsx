import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import classes from './item.module.css'


const Item = ({ id, name, img, price }) => {
    
  
    
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('item')
    }

        return (
            <div onClick={handleClick}>
                <h3 className={classes.h3}>{name}</h3>
                <img src={img} style={{ width: 100 }} />
                <h3>${price}</h3>
                <button className={classes.button} onClick={() => navigate(`/detail/${id} `)}>Detalle</button>
            </div>
        )
}

export default Item