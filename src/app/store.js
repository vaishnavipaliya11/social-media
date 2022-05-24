import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import postReducer from "../features/postSlice"
export const store = configureStore({
reducer :{timeline:authReducer, post:postReducer}
})