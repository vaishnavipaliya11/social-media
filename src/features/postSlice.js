import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  status: "idle",
  error: false,
};

export const getPost = createAsyncThunk("post/getpost", async () => {
  try {
    const { response } = await axios({
        method: "GET",
        url: "/api/posts",
      });
      console.log(response);
  } catch (error) {
      console.log(error);
  }
});

export const createPosts = createAsyncThunk(
    "post/createPost",
    async ({post,token}) =>{
        console.log("post from create ",post);
        console.log("token from create ", token);
        try {
            const response= await axios({
                method:"",
                url:"",
                data:{postData:post},
                headers:{authorization:token}
            })
          console.log(response);  
        } catch (error) {
            
        }
    }
)

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
export default postSlice.reducer;
