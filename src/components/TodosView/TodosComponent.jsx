import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"
import ProductCard from "./ProductCard";
import './TodosComponent.css';


export default function ProductsComponent() {
    const [products, setProducts]=useState([]);

    useEffect(() => {
        getProducts.then(data => setProducts(data));
    },[])

    return <>
    <h3>Productos</h3>
    <article className="Cardd">
        {products.map(product => (
        <ProductCard 
        title={product.title} 
        price={product.price} 
        image={product.image}
        idProd={product.id}
        />
        ))}
    </article>
    </>;
}