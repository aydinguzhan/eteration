import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    productId: "",



};

const badgeSlice = createSlice({
    name: 'badgeSlice',
    initialState,
    reducers: {
        addItem(state, action) {
            state.data.push(action.payload);
            localStorage.setItem("badge", JSON.stringify(state.data))

        },
        removeItem(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.data = [];
        },

        addProductId(state, action) {
            state.productId = action.payload
        },
        addLocalStoge(state) {
            state.data = JSON.parse(localStorage.getItem("badge")) ?? []
        }


    },
});

export const { addItem, removeItem, clearCart, addProductId, addLocalStoge } = badgeSlice.actions;

export default badgeSlice.reducer;
