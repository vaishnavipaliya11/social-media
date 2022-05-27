import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/postSlice";
import bookmarkReducer from "../features/bookmarkSlice";
export const store = configureStore({
  reducer: {
    timeline: authReducer,
    post: postReducer,
    bookmark: bookmarkReducer,
   
  },
});
