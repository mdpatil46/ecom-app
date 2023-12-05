import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "../features/valueAdd/valueSlice";


export const store = configureStore({
  reducer: {
    counter: valueReducer ,
        
  }
})