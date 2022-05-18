import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculator/calculatorSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
})