import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchState:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{state.gptSearchState=!state.gptSearchState}
    }
});
export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;