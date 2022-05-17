import React, { useEffect, useState } from "react";
import "./product.css";
import { BsCart } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import 'animate.css';



const Card = ({ image, title, price }) => {
    return <>
        <div className="all-product">
            <div className="product-card">
            <div className="images">
                        <img className="card" src={image} />
                    </div>


                    <div className="product-box-card">
                        <span className="ptitle">{title}</span>
                        <span className="money">$ {price}</span>
                    </div>
                    <div className="card-on-1">
                        <div className="select-op">
                            <BsCart className="cart-1" />
                        </div>
                        <div className="select-op">
                            <BsEye className="cart-1" />
                        </div>
                        <div className="select-op">
                            <BiRefresh className="cart-1" />

                        </div>
                    </div>

            </div>
        </div>
    </>
}


const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getproduct();
    });

    const getproduct = async () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            // .then(json=>console.log(json))
            .then(json => setProduct(json))
    }

    return (
        <div className="all-container">
            <div className="wrap-container">
                <div className="product-box">
                    
                        <div className="product-card-1">
                            {product.map(product => (

                                <Card image={product.image} title={product.title} price={product.price} />
                            ))}



                        </div>
                    
                 

                </div>

            </div>

            <div className="poster-1">
                <img className="poster" src="https://f5d5a4q7.rocketcdn.me/wp-content/uploads/2017/11/h4-pin.jpg" />
            </div>
        </div>

    );
};

export default Product;
