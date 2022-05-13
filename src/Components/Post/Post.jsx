import React from "react";
import "./Post.css";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Post = ({ post }) => {
  console.log(post);
  const { content, username } = post;
  return (
    <div className="post-container">
    <div className="menu-container">
    <span className="dis-row">
        <img
          className="avatar-img"
          src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
        />
        <h3 className="user-name">{username}</h3>
        <p className="user-id">@{username}</p>

      
      </span>

      <span >   
      <Menu >
        <MenuButton as={Button}>:</MenuButton>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu> </span>
    </div>
      
    

      
      <section className="post-text"> {content}</section>
      <span className="post-bottom-icons">
        <p className="icon">
          <AiOutlineHeart />
        </p>
        <p className="icon">
          <BiComment />
        </p>
        <p className="icon">
          <BsBookmark />
        </p>
      </span>
    </div>
  );
};

export { Post };
