import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App () {
  
  return (
    <>
    <Navbar className/>
    <ItemListContainer greeting="Encontra lo que estas buscando para tu gabinete y tu trabajo.."/>
   
    </>
  )
}

export default App
