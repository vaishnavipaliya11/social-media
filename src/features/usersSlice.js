import { createSlice } from "@reduxjs/toolkit";
import { editUserProfile, getAllUsers } from "./userApi";

const initialState = {
    user: [],
    status: "idle",
    error: false,
    userImage:"",
    allusers:[]
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
          [getAllUsers.pending]: (state) => {
            state.status = "loading";
            state.error = null;
          },
          [getAllUsers.fulfilled]: (state,  {payload} ) => {
            state.status = "succed";
            state.error = null;
            state.allusers = payload;
          },
          [getAllUsers.rejected]: (state) => {
            state.status = "rejected";
            state.error = true;
          },
    }
})
 export const {uploadImage}= userSlice.actions 
export default userSlice.reducer;