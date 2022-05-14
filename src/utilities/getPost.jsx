import axios from "axios";

export const getPostFromDb = async (postDispatch) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/api/posts",
    });
    postDispatch({ type: "GET_USER_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};
