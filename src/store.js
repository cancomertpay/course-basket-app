import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './control/cardSlice.js';


export const store = configureStore({
  reducer: {
    card: cardReducer,
  }
})