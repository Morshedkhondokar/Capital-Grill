
import { useState } from 'react';
import CartContext from '../context/CartContext';

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems,cartItems.length)

    const cartInfo = {
        cartItems,
        setCartItems
    }
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;