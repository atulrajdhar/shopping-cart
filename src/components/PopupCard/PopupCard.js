import React from 'react';

import { useStateValue } from '../../helpers/StateProvider';

function PopupCard({ product }) {

    const [{}, dispatch] = useStateValue();
    
    const addToCart = () => {
        //console.log("addToBasket")
        // add item to cart
        dispatch({
            type: 'ADD_TO_CART',
            item: product
        });
    };

    return (
        <div className="popup-card">
            <a><i className="fas fa-times close-btn"></i></a>
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="info">
                <h2>{product.name}<br /><span>{product.title}</span></h2>
                <p>{product.description}</p>
                <span className="price">
                    <small>&#8377;</small>
                    {product.price}
                </span>
                <a href="#" className="add-cart-btn" onClick={addToCart}>Add to Cart</a>
                <a href="#" className="add-wish">Add to Wishlist</a>
            </div>
        </div>
    );
}

export default PopupCard;