import React, { useState } from 'react';
import './Shop.css';
import '../../../src/fakeData'
import fakeData from '../../../src/fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [cartCount, setCartCount] = useState([]);
    const addProductHandler = (props) => {
        const newCartCount = [...cartCount, props];
        setCartCount(newCartCount);
    }
    const firstTenData = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTenData);

    return (
        <div className="shop-container">
            <div className="products-container">

                {
                    products.map(product => <Products detailsOfOneProduct={product} addProductHandler={addProductHandler}></Products>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cartCount}></Cart>
            </div>

        </div>
    );
};

export default Shop;