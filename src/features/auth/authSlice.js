import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  token: {},
  status: "idle",
  error: null,
};

const saveUserDataInLocalStorage = (userData) => {
  console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData));
};


export const userLogin = createAsyncThunk(
  "auth/login",
  async ({username,password}) => {
    console.log(username);
    console.log(password);
    try {
      const response = await axios({
        method: "POST",
        url: "api/auth/login",
        data: { username, password },
      });
      console.log("try",response);
      const userData = {
        token: response.data.encodedToken,
        user: response.data.foundUser,
      };

      console.log("from try",userData);
      saveUserDataInLocalStorage(userData);
      return userData;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      console.log(action);
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.status = "succed";
    },
    [userLogin.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    },
  },
});

// export const { userLogin } = postSlice.actions;
export default authSlice.reducer;
