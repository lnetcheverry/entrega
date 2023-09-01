import classes from "./Navbar.module.css"
import CardWidget from "../CardWidget/CardWidget"

const Navbar = () => {
    return (
        <nav>
             <h1 className={classes.h1}>Piu Bellaz</h1>
             <section>
                <button className={classes.button}>Muebles de manicuria</button>
                <button className={classes.button}>Insumos</button>
                <button className={classes.button}>Herramientas</button>
             </section>
             <CardWidget/>
        </nav>
    )
}

export default Navbar