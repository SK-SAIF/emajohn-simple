import React, { useState } from 'react';
import './Shop.css';
import '../../../fakeData';
import fakeData from '../../../fakeData';

const Shop = () => {
    const firstTenData = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTenData);

    return (
        <div className="shop-container">
            <div className="products-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h2>CART</h2>
            </div>

        </div>
    );
};

export default Shop;