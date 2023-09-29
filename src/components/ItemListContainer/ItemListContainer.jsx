import { useEffect, useState } from 'react'
//import { getProduct, getProductByCategory } from '../../asincMock'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import classes from './ItemListContainer.module.css'
import { db } from '../../service/firebaseConfing'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams ()

    
    useEffect(() => {
        setLoading(true)
        
        const productsRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))
        
        getDocs(productsRef)
            .then(querySnapshot => {
             const productsAdapted = querySnapshot.docs.map (doc =>{
                const fields = doc.data ()
                return {id: doc.id, ...fields}
             })

             setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
         
/* 
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
             }) */
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