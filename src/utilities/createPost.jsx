import axios from "axios";
import { getUserToken } from "./getUserToken";

export const createPost = async (post,postDispatch) => {
  try {
    const {data} = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post } ,
      headers: {
        authorization: getUserToken(),
      },
      
    });
    console.log(data.posts);
    postDispatch({type:"CREATE_POST",payload:data.posts})
   
  } catch (error) {
      console.log(error)
  }
};
