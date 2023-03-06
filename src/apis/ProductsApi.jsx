import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";

const baseURL = 'https://fakestoreapi.com/products/category/electronics';

// export default axios.create({
//     baseURL: baseURL,
// })

const ProductsApi = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setProduct(response.data);
        }).catch(error => {
            setError(error);
            console.log(error)
        });
    }, []);

   

    if (!product) return null;
    if (error) return `Error: ${error.message}`;

    const pressBuy = () => {
        console.log("Buyed");
    }

    const quantity = 0

    return (
    <div className="products-grid">
         {product.map(({ id, image, title, description, price }) => (
            <div key={id} className="product-card">
                <div className="product-img-area">
                    <img className="product-img" src={image} alt={title} />
                </div>
                <div className="product-content">
                    <h3 className="product-heading">{title.substring(0,50)}</h3>
                    <p className="product-description">{description.substring(0,100)}...</p>
                    <div className="cta-area"> 
                        {quantity <= 0 ? (<Button buttonText={"Buy"} onClick={pressBuy} />) : "In the cart"}
                        <p className="product-price">{price.toFixed(2)} USD</p>
                    </div>
                </div>
            </div>
         ))}
    </div>
    )
}

// TO DO - align texts and imgs, code refactor, extract singleproduct -> make component
export default ProductsApi;