// Global Context
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
        alert("Product added to Cart!")
    }

    return (
        <CartContext.Provider value={{ cart, CartContext, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}
