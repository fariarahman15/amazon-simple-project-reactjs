import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    let tax = 0;
    tax = parseFloat((total * 0.15).toFixed(2));
    
    const grandTotal = total+shipping+tax; 

    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;