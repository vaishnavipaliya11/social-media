import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
  "post/comment",
  async ({   commentData, _id }) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/comments/add/${_id}`,
        {
          commentData
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data.comments
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllComments = createAsyncThunk(
  "post/getcomment",
  async(_id)=>{
    const token = localStorage.getItem("token");
    try {
      const {data}= await axios.get(
        `/api/comments/${_id}`,
        {
          headers: {authorization:token}
        }
      )
      
    return data.comments
    } catch (error) {
      console.log(error);
    }
  }
)
