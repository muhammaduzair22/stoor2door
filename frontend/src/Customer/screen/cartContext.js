import React, { createContext, useState, useEffect } from 'react';

// Create the cart context
export const CartContext = createContext();

// Create the cart provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        console.log("context:" + cartItems.length)
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemName) => {
        setCartItems(cartItems.filter((item) => item.itemName !== itemName));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };
    const getItems = () => {
        return cartItems;
    };

    // Load cart data from local storage on component mount
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Save cart data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Provide the cart state and functions to the children components
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getItems }}>
            {children}
        </CartContext.Provider>
    );
};
