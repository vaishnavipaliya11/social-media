import axios from "axios";
import { getUserToken } from "./getUserToken";

export const createPost = async (postDispatch,post) => {
  console.log("from createpost ",post);
  try {
    const {data} = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post } ,
      headers: {
        authorization: getUserToken(),
      },
      
    });
    postDispatch({type:"CREATE_POST",payload:data.posts})
   
  } catch (error) {
      console.log(error)
  }
};
