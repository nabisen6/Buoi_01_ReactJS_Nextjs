import React from 'react';
import './style.css';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img src={image} className='product-image' />
            <h1>{name}</h1>
            <p>${price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductCard;
