import { configureStore } from "@reduxjs/toolkit";
import valueSlice from "../features/valueAdd/valueSlice";


export const store = configureStore({
    reducer: valueSlice
})