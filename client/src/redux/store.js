import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducer/postSlice";
import userSlice from "./reducer/userSlice";



export const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice
    }
})