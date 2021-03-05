import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    
    const {name,img,seller,price,stock}=props.detailsOfOneProduct;
    return (
        <div className="Products">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p>By:{seller}</p>
                <br/>
                <p>Price:${price}</p>
                <br/>
                <p>Stock:{stock}</p>
                <button onClick={()=>props.addProductHandler(props.detailsOfOneProduct)} className="add-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;