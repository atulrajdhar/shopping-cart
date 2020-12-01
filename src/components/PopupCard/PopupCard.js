import React from 'react';

import { useStateValue } from '../helpers/StateProvider';

function PopupCard({ id, name, title, image, description, price }) {

    const [{}, dispatch] = useStateValue();
    
    const addToCart = () => {
        //console.log("addToBasket")
        // add item to cart
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                name: name,
                title: title,
                image: image,
                description: description,
                price: price                
            },
        });
    };

    return (
        <div className="popup-card">
            <a><i className="fas fa-times close-btn"></i></a>
            <div className="product-img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h2>{name}<br /><span>{title}</span></h2>
                <p>{description}</p>
                <span className="price">
                    <small>&#8377;</small>
                    {price}
                </span>
                <a href="#" className="add-cart-btn" onClick={addToCart}>Add to Cart</a>
                <a href="#" className="add-wish">Add to Wishlist</a>
            </div>
        </div>
    );
}

export default PopupCard;