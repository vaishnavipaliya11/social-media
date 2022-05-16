import React from "react";
import "./Post.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EdiPostModal } from "../modal/editModal";
import { usePost } from "../../context/postContext";
import { deletePost } from "../../utilities/deletePost";

const Post = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { _id, content, username } = post;
  const { postDispatch } = usePost();

  return (
    <div className="post-container">
      <EdiPostModal onClose={onClose} isOpen={isOpen} />
      <div className="menu-container">
        <span className="dis-row">
          <img
            className="avatar-img"
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
          />
          <h3 className="user-name">{username}</h3>
          <p className="user-id">@{username}</p>
        </span>

        <span>
          <Menu>
            <MenuButton className = "edit-btn"as={Button}>:</MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  onOpen();
                  postDispatch({ type: "USER_ID", payload: _id });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
              onClick={() => {
                
                deletePost(_id,postDispatch)
              }}>Delete</MenuItem>
            </MenuList>
          </Menu>{" "}
        </span>
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
