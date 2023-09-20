import { createSlice } from "@reduxjs/toolkit";
import courseItems from '../courseItems.js';



const initialState = {
  cardItems: courseItems,
  quantity: 4,
  total: 0
}


const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers:{
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeCard: (state,action) => {
      const id = action.payload
      state.cardItems = state.cardItems.filter(item => item.id !== id)
    },
    increase: (state,action) => {
      const cardItem = state.cardItems.find(item => item.id === action.payload);
      cardItem.quantity += 1;
    },
    decrease: (state,action) => {
      const cardItem = state.cardItems.find(item => item.id === action.payload);
      if(cardItem.quantity > 0)
      cardItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let qty = 0;
      state.cardItems.forEach(item => {
        total += item.quantity * item.price;
        qty += item.quantity;
      });
      state.quantity = qty
      state.total = total
    },
  }
})

export const { clearCard, removeCard, increase, decrease, calculateTotal } = cardSlice.actions;

export default cardSlice.reducer;