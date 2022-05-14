import React from "react";
import { PostModal } from "../../Components/modal/postModal";
import { usePost } from "../../context/postContext";
import { Post } from "../../Components/Post/Post";

export const Home = () => {
  const { postState} = usePost();
  const { createPost } = postState;
  return (
    <div className="post-display-container">
      <p>home page</p>
      <PostModal />
      {createPost.map((post) => {
        console.log(post.content);
        return <Post post={post}/>;
      })}
    </div>
  );
};
