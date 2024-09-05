import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  shippingMethod: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.totalAmount -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
    selectShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, selectShippingMethod } = cartSlice.actions;
export default cartSlice.reducer;
