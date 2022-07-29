import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
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
      toast.success("added comment")
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

export const editUserComment = createAsyncThunk(
  "post/editcomment",
  async({id,commentId,commentData})=>{
    const token = localStorage.getItem("token");
    try {
      const {data}= await axios.post(
        `/api/comments/edit/${id}/${commentId}`,
        {commentData:{text:commentData}},
        {
          headers: {authorization:token}
        }
      )
      toast.success("edited comment!")
    return data.comments
    } catch (error) {
      console.log(error);
    }
  }
)

export const deleteUserComment = createAsyncThunk(
  "post/deletecomment",
  async({id,commentId}) =>{
    console.log(id);
    console.log(commentId);
    const token = localStorage.getItem("token")
    try {
      const {data}= await axios.post(
        `/api/comments/delete/${id}/${commentId}`,
        {},
        {
          headers:{authorization:token}
        }
      )
      toast.success("deleted comment!")
      return data.comments
    } catch (error) {
      
    }
  }
)
