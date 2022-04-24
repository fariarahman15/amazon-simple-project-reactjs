import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = props.product;
   
    return (
        <div className="product" >
            <img src={img} alt=""/>
            <div className="product-info">
                <p className="product-title">{name}</p>
                <p className="product-price">Price: ${price}</p>
                <div className="product-details">
                <p className="product-seller">Manufacturer: {seller}</p>
                <p className="product-ratings">Rating: {ratings} stars</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleAddToCart(product)} className="add-cart-btn">
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

                </button>
            </div>
        </div>
    );
};

export default Product;