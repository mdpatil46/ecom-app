import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   names: '',
   amount : '',
   photo : '',
   
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
     },

     setphoto:(state,action) =>{
      console.log(action);
      state.photo=action.payload
    }
   },
});

export const {increment, addamount, setphoto } = valueSlice.actions

export default valueSlice.reducer