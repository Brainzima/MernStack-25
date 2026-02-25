import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: reducer
    }
})
export default store;