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


    },
});

export const { addItem, removeItem, clearCart, addProductId } = badgeSlice.actions;

export default badgeSlice.reducer;
