import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

           console.log(data);
           return data.user
        } catch (error) {
            console.log(error);
        }
    }
)

export const getAllUsers = createAsyncThunk(
    "",
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