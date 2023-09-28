import classes from "./Navbar.module.css"
import CartWidget from "../CardWidget/CartWidget"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav>
             <h1 className={classes.h1}>Piu Bellaz</h1>
             <section>
                <button className={classes.button} onClick={() => navigate (`/category/Muebles de manicuria`)}>Muebles de manicuria</button>
                <button className={classes.button} onClick={() => navigate (`/category/Insumos`)}>Insumos</button>
                <button className={classes.button} onClick={() => navigate (`/category/Herramientas`)}>Herramientas</button>
             </section>
             <CartWidget/>
        </nav>
    )
}

export default Navbar