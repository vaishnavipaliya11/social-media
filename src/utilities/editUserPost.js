import axios from "axios"
import { getUserToken } from "./getUserToken"

export const editUserPost = async(id,post,postDispatch)=>{
    console.log("called");
  console.log("id",id);
    console.log("post",post);

   
        try {
          const { data } = await axios.post(
            `/api/posts/edit/${id}`,
            {
              postData:post,
            },
            {
              headers: {
                authorization: getUserToken(),
              },
            }
          );
      console.log("from edit",data);
          postDispatch({ type: "EDIT_POST", payload: data.posts });
        } catch (error) {
          console.log(error);
        }
      };
