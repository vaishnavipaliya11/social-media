import { createSlice } from "@reduxjs/toolkit";
import { editUserProfile, followUser, followUserApi, getAllUsers, unfollowUser } from "./userApi";

const initialState = {
    users: [],
    status: "idle",
    error: false,
    userImage:"",
    allusers:[],
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
            state.allusers = state.allusers.map((eachuser)=>{
             return  eachuser.username === payload.username ? payload : eachuser
            });
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
          [followUserApi.pending]: (state) => {
            state.status = "loading";
            state.error = null;
          },
          [followUserApi.fulfilled]: (state,  {payload} ) => {
            console.log("payload from follow",payload);
            state.status = "succed";
            state.error = null;
            state.allusers = state.allusers.map(eachuser => {
              if (eachuser.username === payload.followUser.username) {
                return payload.followUser;
              }
              if (eachuser.username === payload.user.username) {
                return payload.user;
              }
              return eachuser;
            }); 
          },
          [followUserApi.rejected]: (state) => {
            state.status = "rejected";
            state.error = true;
          },
          [unfollowUser.pending]: (state) => {
            state.status = "loading";
            state.error = null;
          },
          [unfollowUser.fulfilled]: (state,  {payload} ) => {
            console.log(payload);
            state.status = "succed";
            state.error = null;
            state.allusers = state.allusers.map(eachuser => {
              if (eachuser.username === payload.followUser.username) {
                return payload.followUser;
              }
              if (eachuser.username === payload.user.username) {
                return payload.user;
              }
              return eachuser;
            });;
          },
          [unfollowUser.rejected]: (state) => {
            state.status = "rejected";
            state.error = true;
          }

    }
})
 export const {uploadImage}= userSlice.actions 
export default userSlice.reducer;