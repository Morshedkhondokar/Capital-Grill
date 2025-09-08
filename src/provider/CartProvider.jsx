
import { useEffect, useState } from 'react';
import CartContext from '../context/CartContext';

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
    // get cartItems if localstorage has cartItems
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
    console.log(cartItems,cartItems.length)

// save to localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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