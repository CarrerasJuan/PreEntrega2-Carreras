import { useParams } from "react-router-dom"
import { getProduct } from "../asyncMock";
import { useEffect, useState } from "react";

export default function SingleProd() {
    const [product, setProduct] = useState({});

    const {proId} = useParams();

    useEffect(()=>{
        setProduct(getProduct(proId))
    },[])


    return (
    <>
        <h1>Detalles</h1>
        <p>ID: {proId}</p>
        <h3>Nombre: {product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>Descripcion: {product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio: {product.price}</p>
    </>
    );
}