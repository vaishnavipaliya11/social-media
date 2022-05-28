import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addComment } from "./commentApi";

const initialState = {
  post: [],
  status: "idle",
  error: false,
  id: "",
  singlePost:[],
  comment:[]
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

export const addToLike = createAsyncThunk("like/add", async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data.posts;
  } catch (error) {
    console.log(error.data);
  }
});

export const removeLike = createAsyncThunk("like/remove", async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data.posts;
  } catch (error) {
    console.log(error.data);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.id = action.payload;
    },
    getSelectedPost:(state,action)=>{
      state.singlePost= action.payload
    }
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getPost.fulfilled]: (state, { payload }) => {
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
    [addToLike.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addToLike.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.post = payload;
    },
    [addToLike.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [removeLike.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [removeLike.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.post = payload;
    },
    [removeLike.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    // [addComment.pending]: (state) => {
    //   state.status = "loading";
    //   state.error = null;
    // },
    // [addComment.fulfilled]: (state, { payload }) => {
    //   state.status = "succed";
    //   state.error = null;
    //   state.comment = payload;
    // },
    // [addComment.rejected]: (state) => {
    //   state.status = "rejected";
    //   state.error = true;
    // },
  },
});
export const { getUserId , getSelectedPost} = postSlice.actions;
export default postSlice.reducer;
