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
  async (post) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios({
        method: "POST",
        url: "/api/posts",
        data: { postData: post },
        headers: { "authorization": token },
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers:{
    [createPosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createPosts.fulfilled]: (state, {payload}) => {
      state.post = payload.data.posts;
      state.status = "succed";
    },
    [createPosts.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    }
  }
});
export default postSlice.reducer;
