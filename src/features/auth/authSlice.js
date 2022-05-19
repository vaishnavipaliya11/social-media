import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  token: {},
  status: "idle",
  error: true,
};

const saveUserDataInLocalStorage = (userData) => {
  console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData));
};

export const removeUserData = () =>{
  localStorage.removeItem("userData")
}
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

export const userSignUp = createAsyncThunk(
  "auth/sign",
  async({firstname,lastname,username,password})=>{
    try {
      const response= await axios({
        method:"POST",
        url:"api/auth/signup",
        data:{firstname,lastname,username,password}
      })
     const userData = {
      token: response.data.encodedToken,
      user: response.data.createdUser,
    }
    saveUserDataInLocalStorage(userData)
    return userData
    } catch (error) {
      console.log(error);
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state) => {
      removeUserData();
      state.user = {};
    }
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "succed";
    },
    [userLogin.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    },
    [userSignUp.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "succed";
    },
    [userSignUp.rejected]: (state, action) => {
      state.error = true;
      state.status = "rejected";
    }
  },
});

export  const {userLogout} = authSlice.actions
export default authSlice.reducer;