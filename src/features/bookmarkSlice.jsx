import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "false",
  bookmark: [],
  id:""
};

export const addToBookmark = createAsyncThunk(
  "bookmark/add",

  async (postId) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
     
      return data.bookmarks;
    } catch (error) {
      console.log(error.data);
    }
  }
);

export const removeBookmark = createAsyncThunk("bookmark/delete", async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return data.bookmarks
  } catch (error) {
    console.error(error);
  }
});

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: {
    [addToBookmark.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addToBookmark.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.bookmark = payload;
    },
    [addToBookmark.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [removeBookmark.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [removeBookmark.fulfilled]: (state, { payload }) => {
      state.status = "succed";
      state.error = null;
      state.bookmark = payload;
    },
    [removeBookmark.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
  },
});

export default bookmarkSlice.reducer;
