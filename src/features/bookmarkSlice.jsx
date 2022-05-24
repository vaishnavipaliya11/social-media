import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    error:"false",
    bookmark:[]
}

export const addToBookmark = createAsyncThunk(
 "bookmark/add",

 async(postId) =>{
    console.log("called",postId)
    const token = localStorage.getItem("token");
     try {
        
         const {data}= await axios.post(
            `/api/users/bookmark/${postId}`,
            {},
            {
                headers:{authorization:token}
            }   
         )
         console.log(data);
     } catch (error) {
         console.log(error.data);
     }
 }  
)
export const bookmarkSlice= createSlice({
    name:"bookmark",
    initialState,
    reducers:{}
})

export default bookmarkSlice.reducer;