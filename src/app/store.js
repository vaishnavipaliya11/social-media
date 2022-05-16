import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../features/like/likeslice"
export const store = configureStore({
reducer :{timeline:likeReducer}
})