import { createSlice } from "@reduxjs/toolkit";

const showHeader = createSlice({
    name: "show",
    initialState: {
        showingHeader: true,
    },
    reducers: {
        showHeaderComponent: (state, action) => {
            state.showingHeader = !state.showingHeader;
        }
    }

})

export const { showHeaderComponent } = showHeader.actions;

export default showHeader.reducer;