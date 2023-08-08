import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from './../Features/Counter/Index';

export const store = configureStore({
    reducer: {
        bebas: counterSlice
    }
})