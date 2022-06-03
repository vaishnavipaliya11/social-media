import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editUserProfile = createAsyncThunk(
    "user/edit",
    async(userdata) =>{
        console.log("userdata",userdata);
        const token = localStorage.getItem("token")
        try {
           const {data}= await axios.post(
                "/api/users/edit",
                {userData:userdata},
                {
                    headers:{authorization:token}
                }
           ) 

           console.log("data user",data.user);
           return data.user
        } catch (error) {
            console.log(error);
        }
    }
)

export const getAllUsers = createAsyncThunk(
    "user/allusers",
    async() =>{
        try {
            const {data}= await axios.get(
                "/api/users"
            )
            return data.users
        } catch (error) {
            console.log(error);
        }
    }
)

export const followUserApi = createAsyncThunk(
    "users/follow",
    async(_id) =>{
        console.log("id",_id);
        const token = localStorage.getItem("token")
        console.log(token);
        try {
            const {data}= await axios.post(
                `api/users/follow/${_id}`,
                {},
                {
                    headers:{authorization:token}
                }
            )
            console.log("follow user",data);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const unfollowUser = createAsyncThunk(
    "users/unfollow",
    async(_id) =>{
        const token = localStorage.getItem("token")
        try {
            const {data}= await axios.post(
                `api/users/unfollow/${_id}`,
                {},
                {
                    headers:{authorization:token}
                }
            )
            console.log("unfollow user",data);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)