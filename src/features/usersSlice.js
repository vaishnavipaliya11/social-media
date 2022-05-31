import { createSlice } from "@reduxjs/toolkit";
import { editUserProfile } from "./userApi";

const initialState = {
    user: [],
    status: "idle",
    error: false,
    userImage:""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        uploadImage:(state,action)=>{
            state.userImage=action.payload
        }
    },
    extraReducers:{
        [editUserProfile.pending]: (state) => {
            state.status = "loading";
            state.error = null;
          },
          [editUserProfile.fulfilled]: (state, { payload }) => {
            state.status = "succed";
            state.error = null;
            state.user = payload;
          },
          [editUserProfile.rejected]: (state) => {
            state.status = "rejected";
            state.error = true;
          },
    }
})
 export const {uploadImage}= userSlice.actions 
export default userSlice.reducer;