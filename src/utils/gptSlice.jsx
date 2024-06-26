import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch =!state.showGptSearch
        },
        removeGptSearchView:(state)=>{
            state.showGptSearch = false
        }
    }
})
export const{ toggleGptSearchView,removeGptSearchView } =gptSlice.actions
export default gptSlice.reducer