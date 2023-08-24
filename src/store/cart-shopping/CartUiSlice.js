const { createSlice } = require("@reduxjs/toolkit");

const CartUiSlice = createSlice ({
    name: 'cartUi',
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const CartUiActions = CartUiSlice.actions;
export default CartUiSlice;
