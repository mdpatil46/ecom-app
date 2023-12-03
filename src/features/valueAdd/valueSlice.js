import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    values : [{id:1, text:"15,00,000"}]
}

export const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: { 
        addValue: (state, action)=>{
            const value = {
                id: nanoid(),
                text:action.payload
            };
            state.values.push(value)
         }
        
    }
});

export const {addValue} = valueSlice.actions

export default valueSlice.reducer