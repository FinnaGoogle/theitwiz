import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice to create Redux slice

// Initial state for the cart, including an empty array of items, a total amount, and no selected shipping method
const initialState = {
  items: [], // Array to store cart items
  totalAmount: 0, // Tracks total price of items in the cart
  shippingMethod: null, // Tracks the selected shipping method
};

// Creating a Redux slice for cart functionality
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer to handle adding items to the cart
    addToCart: (state, action) => {
      state.items.push(action.payload); // Add new item to the cart
      state.totalAmount += action.payload.price; // Update total amount by adding the item's price
    },
    // Reducer to handle removing items from the cart
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id); // Find the index of the item to remove
      if (index >= 0) {
        state.totalAmount -= state.items[index].price; // Subtract the item's price from the total amount
        state.items.splice(index, 1); // Remove the item from the cart array
      }
    },
    // Reducer to handle selecting a shipping method
    selectShippingMethod: (state, action) => {
      state.shippingMethod = action.payload; // Set the selected shipping method
    },
  },
});

// Exporting the actions to be used in components
export const { addToCart, removeFromCart, selectShippingMethod } = cartSlice.actions;
// Exporting the reducer to be added to the Redux store
export default cartSlice.reducer;