import React from "react";
import "./home.css";
import { PostModal } from "../../Components/modal/postModal";
import { usePost } from "../../context/postContext";
import { Post } from "../../Components/Post/Post";
import { useEffect } from "react";
import { getPostFromDb } from "../../utilities/getPost";

export const Home = () => {
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;

  useEffect(() => {
    getPostFromDb(postDispatch);
  }, []);
  return (
    <div className="post-display-container">
      <PostModal />
      {createPost.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};
