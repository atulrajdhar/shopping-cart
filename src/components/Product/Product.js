import React from 'react';

import PopupCard from '../PopupCard/PopupCard';

import './Product.css';

function Product({ product }) {

    return (
        <div className="product">
            <div className="product-card">
                <h2 className="name">{product.name}</h2>
                <span className="price">
                    <small>&#8377;</small>
                    {product.price}
                </span>
                <a className="popup-btn">Quick View</a>
                <img src={product.image} className="product-img" alt="" />
            </div>
            <div className="popup-view">
                <PopupCard product={product} />
            </div>
      </div>
    );
}

export default Product;