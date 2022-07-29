
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostModal } from "../../Components/modal/postModal";
import { Post } from "../../Components/Post/Post";
import { getPost } from "../../features/postSlice";

export const SinglePost = () => {
  const { postId } = useParams();
  const { post } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  const singlePost = post.find((item) => item._id === postId);
  return (
    <div className="post-display-container">
      <PostModal />

      <Post key={post._id} post={singlePost} />
    </div>
  );
};
