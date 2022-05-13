import React from "react";
import { PostModal } from "../../Components/modal/postModal";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { usePost } from "../../context/postContext";
import { Post } from "../../Components/Post/Post";

export const Home = () => {
  const { postState} = usePost();
  const { createPost } = postState;
  console.log(createPost);
  return (
    <div className="post-display-container">

      <PostModal />
      {createPost.map((post) => {
        console.log(post.content);
        return <Post post={post} />;
      })}
    </div>
  );
};
