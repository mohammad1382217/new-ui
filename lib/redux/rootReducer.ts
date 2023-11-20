/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice, loginSlice } from './slices'

export const reducer = combineReducers({
  counter: counterSlice.reducer,
  login: loginSlice.reducer,
})
