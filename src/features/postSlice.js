import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addComment,
  deleteUserComment,
  editUserComment,
  getAllComments,
} from "./commentApi";
import toast from "react-hot-toast";

const initialState = {
  post: [],
  status: "idle",
  error: false,
  id: "",
  singlePost: {},
  commentId: "",
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
    toast.success("created post")
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
      toast.success("edited post")
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
    toast.success("deleted post")
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addToLike = createAsyncThunk("like/add", async (postId,{rejectWithValue}) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
      toast.success("added to like")
    return data.posts;
  } catch (error) {

    return rejectWithValue(error.message);
    
  }
});

export const removeLike = createAsyncThunk("like/remove", async (postId,{rejectWithValue}) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    toast.success("removed from like")
    return data.posts;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.id = action.payload;
    },
    getSelectedPost: (state, action) => {
      state.singlePost = action.payload;
    },

    getCommentId: (state, action) => {
      console.log("comem");
      state.commentId = action.payload;
    },
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
      console.log(payload);
      state.status = "succed";
      state.error = null;
      state.post = payload;
    },
    [addToLike.rejected]: (state) => {
      console.log("rejected");
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
    [addComment.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.post = state.post.map((eachpost) =>
        eachpost._id === state.singlePost._id
          ? {
              ...eachpost,
              comments: payload,
            }
          : eachpost
      );
    },
    [addComment.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [getAllComments.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getAllComments.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.usercomment = payload;
    },
    [getAllComments.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [editUserComment.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [editUserComment.fulfilled]: (state, { payload }) => {
      state.status = "succeed";
      state.error = null;
      state.post.find((item) => item._id === state.id).comments = payload;
    },
    [editUserComment.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [deleteUserComment.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [deleteUserComment.fulfilled]: (state, { payload }) => {
      state.status = "succeed";
      state.error = null;
      state.post = state.post.map((eachpost) =>
        eachpost._id === state.singlePost._id
          ? {
              ...eachpost,
              comments: payload,
            }
          : eachpost
      );
    },
    [deleteUserComment.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
  },
});
export const { getUserId, getSelectedPost, getCommentId } = postSlice.actions;
export default postSlice.reducer;
