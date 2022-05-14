import axios from "axios";
import { getUserToken } from "./getUserToken";

export const editUserPost = async (id, post, postDispatch) => {
  try {
    const { data } = await axios.post(
      `/api/posts/edit/${id}`,
      {
        postData: post,
      },
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );
    postDispatch({ type: "EDIT_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};
