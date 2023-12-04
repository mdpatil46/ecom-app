import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   names: '',
}

export const valueSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { 
       increment : (state, action)=>{
      state.names = action.payload;
       },
     
        
    }
});

export const {increment } = valueSlice.actions

export default valueSlice.reducer