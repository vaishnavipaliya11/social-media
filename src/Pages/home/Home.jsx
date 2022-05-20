import React from "react";
import "./home.css";
import { PostModal } from "../../Components/modal/postModal";
import { usePost } from "../../context/postContext";
import { Post } from "../../Components/Post/Post";
import { useEffect } from "react";
import { getPostFromDb } from "../../utilities/getPost";
import { useSelector } from "react-redux";
import { getPost } from "../../features/postSlice";
import { useDispatch } from "react-redux";
export const Home = () => {
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;
  const dispatch= useDispatch()
  const { post } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getPost());
  }, []);
  
  return (
    <div className="post-display-container">
      <PostModal />
      {post.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};
