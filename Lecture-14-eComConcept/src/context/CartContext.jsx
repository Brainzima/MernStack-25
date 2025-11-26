// Global Context
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
        alert("Product added to Cart!")
    }

    const removeFromCart = (id) =>{
        const newCart = cart.filter((item)=> item.id !== id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, CartContext, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

}
