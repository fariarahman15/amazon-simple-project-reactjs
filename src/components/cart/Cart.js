import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    let tax = 0;
    tax = +(total * 0.15).toFixed(2);
    console.log(tax);

    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${total+shipping+tax}</p>
        </div>
    );
};

export default Cart;