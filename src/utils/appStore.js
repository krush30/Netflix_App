import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import showReaducer from "./showHeader";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer,
        show: showReaducer,
    }

})

export default appStore;