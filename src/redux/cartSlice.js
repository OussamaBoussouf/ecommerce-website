import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products:[]
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find( product => product.id === action.payload.id);
      if(product){
        product.quantity += action.payload.quantity;
      } else{
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.products = [];
    }
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
