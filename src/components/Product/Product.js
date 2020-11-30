import React from 'react';
import './Product.css';

function Product({ id, name, title, image, description, price }) {

    return (
        <div className="product">
            <div className="product-card">
                <h2 className="name">{name}</h2>
                <span className="price">
                    <small>&#8377;</small>
                    {price}
                </span>
                <a className="popup-btn">Quick View</a>
                <img src={image} className="product-img" alt="" />
            </div>
            <div className="popup-view">
                <PopupCard 
                    id={id}
                    name={name}
                    title={title}
                    image={image}
                    description={description}
                    price={price} />
            </div>
      </div>            
    );
}

export default Product;