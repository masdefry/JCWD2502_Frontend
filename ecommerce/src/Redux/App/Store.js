import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from './../Features/Counter/Index';
import userSlice  from "../Features/User/Index";

export const store = configureStore({
    reducer: {
        bebas: counterSlice,
        users: userSlice
    }
})