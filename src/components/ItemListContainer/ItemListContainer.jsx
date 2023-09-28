import { useEffect, useState } from 'react'
import { getProduct, getProductByCategory } from '../../asincMock'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import classes from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams ()

    
    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductByCategory : getProduct

        asyncFunction(categoryId)
             .then (result => {
                setProducts(result)
             })
             .catch(error => {
                console.error(error)
             })
             .finally(() => {
                setLoading(false)
             })
    }, [categoryId])

    if(loading) {
        return <h1>cargando productos..</h1>
    }
    
    return(
        <div>
            <h1 className={classes.h1}>{greeting}</h1>
            <ItemList products={products}/>
            
        </div>
    )
 }

export default ItemListContainer 