import React from 'react';
import CartBanner from '../components/cart/CartBanner';
import CartItems from '../components/cart/CartItems';

const Cart = () => {
    return (
        <div>
            <CartBanner/>
            <CartItems/>
        </div>
    );
};

export default Cart;