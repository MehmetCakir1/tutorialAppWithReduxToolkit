import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "../features/tutorial/tutorialSlice"


export const store=configureStore({
    reducer:{
        tutorial:tutorialReducer,
    }
})