import { Link } from "react-router-dom";
export default function ButtonComponent({nombre, ruta}) {
    return (
        <>
        <button>
        <Link to={ruta}>{nombre}</Link>
        </button>
        </>
    );
}