import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const updateTotals = (state) => {
    state.totalQuantity = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    state.totalPrice = state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            updateTotals(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            updateTotals(state);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                updateTotals(state);
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
            }
            updateTotals(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
