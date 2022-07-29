import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const editUserProfile = createAsyncThunk(
    "user/edit",
    async(userdata) =>{
        const token = localStorage.getItem("token")
        try {
           const {data}= await axios.post(
                "/api/users/edit",
                {userData:userdata},
                {
                    headers:{authorization:token}
                }
           ) 

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
        const token = localStorage.getItem("token")
        console.log(_id);
        try {
            const {data}= await axios.post(
                `/api/users/follow/${_id}`,
                {},
                {
                    headers:{authorization:token}
                }
            )
            toast.success("followed user")
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
                `/api/users/unfollow/${_id}`,
                {},
                {
                    headers:{authorization:token}
                }
            )
            toast.success("unfollow user")
            return data
        } catch (error) {
            console.log(error);
        }
    }
)