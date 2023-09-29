import './App.css' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext'
import { NotificationProvider } from './components/Notification/NotificationService'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App () {
  
  return (
    <>
    <NotificationProvider>
     <CartProvider>
      <BrowserRouter> 
       <Navbar className/>
        <Routes>
        <Route path='/' element={<ItemListContainer greeting= {'Encontra lo que buscas para tu gabinete'}/>}/> 
        <Route path='/category/:categoryId' element={<ItemListContainer greeting= {'Productos por categoria'}/>}/> 
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/> 
        <Route path='/cart' element={<Cart />}/> 
        <Route path='/checkout' element={<Checkout />}/>
         </Routes>
       </BrowserRouter>
      </CartProvider>  
    </NotificationProvider>
    </>
  )
}

export default App
