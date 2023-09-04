import { useEffect, useState } from 'react'
import { getProduct, getProductByCategory } from '../../asincMock'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import classes from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams ()
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProduct

        asyncFunction(categoryId)
             .then (res => {
                setProducts(res)
             })
             .catch(error => {
                console.error(error)
             })
    }, [categoryId])
    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
            
        </div>
    )
 }

export default ItemListContainer 