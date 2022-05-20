import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  status: "idle",
  error: false,
  id: "",
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

export const createPosts = createAsyncThunk("post/createPost", async (post) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post },
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.response);
  }
});

export const editPosts = createAsyncThunk(
  "post/edit",
  async ({ edittedPost, id }) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${id}`,
        {
          postData: edittedPost,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [getPost.fulfilled]: (state, { payload }) => {
      state.status = "loading";
      state.error = null;
      state.post = payload.data.post;
    },
    [createPosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createPosts.fulfilled]: (state, { payload }) => {
      state.post = payload.data.posts;
      state.status = "succed";
    },
    [createPosts.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    },
    [editPosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [editPosts.fulfilled]: (state, { payload }) => {
      state.post = payload.posts;
      state.status = "succed";
    },
    [editPosts.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    },
  },
});
export const { getUserId } = postSlice.actions;
export default postSlice.reducer;
