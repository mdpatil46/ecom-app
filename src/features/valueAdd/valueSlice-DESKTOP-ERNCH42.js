import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   names: '',
   amount : '',
   photo : '',
   photostate: '',
   
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
    },

    setState:(state,action) =>{
      state.photostate = action.payload
    }
   },
});

export const {increment, addamount, setphoto, setState } = valueSlice.actions

export default valueSlice.reducer