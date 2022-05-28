import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
  "post/comment",
  async ({   userComment, _id }) => {
      console.log(_id);
      console.log(userComment);
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/comments/add/${_id}`,
        {
            commentData:userComment
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log("data",data);
    } catch (error) {
      console.log(error);
    }
  }
);
