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
    const { data } = await axios({
      method: "GET",
      url: "/api/posts",
    });
    return data.posts;
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

export const deletePosts = createAsyncThunk("post/delete", async (id) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/posts/${id}`,
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = "succed";
      state.error = null;
      state.post = payload;
    },
    [getPost.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [createPosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createPosts.fulfilled]: (state, { payload }) => {
      state.post = payload.data.posts;
      state.status = "succed";
    },
    [createPosts.rejected]: (state) => {
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
    [editPosts.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
    },
    [deletePosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [deletePosts.fulfilled]: (state, { payload }) => {
      state.post = payload.posts;
      state.status = "succed";
    },
    [deletePosts.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
    },
  },
});
export const { getUserId } = postSlice.actions;
export default postSlice.reducer;
