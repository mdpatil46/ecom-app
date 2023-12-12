import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   names: '',
   amount : '',
   
}

export const valueSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { 
       increment : (state, action)=>{
      state.names = action.payload;
       },
     
     addamount : (state, action)=>{
      state.amount = action.payload
     }
       
    }
});

export const {increment, addamount } = valueSlice.actions

export default valueSlice.reducer