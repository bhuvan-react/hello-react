import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from '../createSLice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})