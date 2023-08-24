import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-shopping/CartSlice";
import CartUiSlice from "./cart-shopping/CartUiSlice";

const store = configureStore({  
    reducer: {
        cart: CartSlice.reducer,
        cartUi: CartUiSlice.reducer
    }
});

export default store;