import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let subTotal = cart.reduce((sum, oneProduct) => sum + oneProduct.price, 0);
    subTotal.toFixed(2);
    let tax = (subTotal * 0.1).toFixed(2);
    let total = 0;
    if (subTotal > 0) {
        total = (subTotal + Number(tax) + 12);
    }
    return (
        <div>
            <h4>Order summary</h4>
            <p>TOtal items:{cart.length}</p>
            <ul>
                {
                    cart.map(selectedProduct => <li>{selectedProduct.name}</li>)
                }
            </ul>
            <h3>Subtotal:{subTotal}</h3>
            <h3>Shipping cost:$12</h3>
            <h4>VAt:{tax}</h4>
            <h2>Total:{total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;