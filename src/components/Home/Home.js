import React, { useState, useEffect } from 'react';

import Product from '../Product/Product';

import './Home.css';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = [
            {
                id: "1600490069",
                name: "Nike Shoe",
                title: "Men's Sport",
                image: "",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "120.00"
            },                       

            {
                id: "1600490070",
                name: "Smart Watch",
                title: "Smart Sport Modes",
                image: "",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "100.00"
            },

            {
                id: "1600490069",
                name: "Camera",
                title: "Classic Camera",
                image: "",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                price: "250.00"
            }
        ]
        setProducts(data);
    }, []);

    return (
        <div className="home">
            {products?.map((product) => (
                <Product product={product} />
            ))}        
        </div>
    )
}

export default Home;