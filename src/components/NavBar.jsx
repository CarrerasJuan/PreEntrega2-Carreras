import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className='allNav'>
            <Link to={'/'} ><h1 className='logo'>PerfumesJEC</h1></Link>
            <nav className="barra">
            <ButtonComponent ruta={"/"} nombre={"Todos"} />
            <ButtonComponent ruta={"/Hombres"}nombre={"Hombres"} />
            <ButtonComponent ruta={"/Mujeres"}nombre={"Mujeres"} />
            </nav>
            <CartWidget/>
        </header>  
    );
}