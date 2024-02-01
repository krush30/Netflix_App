import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        showGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }

})

export const { showGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;