import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changLang: (state, action) => {
            state.lang = action.payload;
        },
    },
})

export const { changLang } = configSlice.actions;

export default configSlice.reducer;