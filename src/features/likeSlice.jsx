import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "false",
  like: [],
};


export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default likeSlice.reducer;
