import React from "react";
import "./Post.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EdiPostModal } from "../modal/editModal";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, getUserId } from "../../features/postSlice";
import { addToBookmark, removeBookmark } from "../../features/bookmarkSlice";
import { useNavigate } from "react-router-dom";
import { addToLike, removeLike } from "../../features/postSlice";
const Post = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { bookmark } = useSelector((store) => store.bookmark);
  const { token } = useSelector((store) => store.timeline);
  const navigate = useNavigate();
  const bookMarkHandler = () => {
    if (bookmark.find((item) => item._id === post._id)) {
      dispatch(removeBookmark(post._id));
    } else if (token) {
      dispatch(addToBookmark(post._id));
    } else {
      navigate("/login");
    }
  };

  const isBookMarked = bookmark.find((item) => item._id === post._id);
  return (
    <div className="post-container">
      <EdiPostModal onClose={onClose} isOpen={isOpen} />
      <div className="menu-container">
        <span className="dis-row">
          <img
            className="avatar-img"
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
          />
          <h3 className="user-name">{post.username}</h3>
          <p className="user-id">@{post.username}</p>
        </span>

        <span>
          <Menu>
            <MenuButton className="edit-btn" as={Button}>
              :
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  onOpen();
                  dispatch(getUserId(post._id));
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(deletePosts(post._id));
                }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>{" "}
        </span>
      </div>

      <section className="post-text"> {post.content}</section>
      <span className="post-bottom-icons">
        {post.likes.likeCount >= 1 ? (
          <p
            className="icon"
            onClick={() => {
              dispatch(removeLike(post._id));
            }}
          >
            <AiFillLike />
          </p>
        ) : (
          <p
            className="icon"
            onClick={() => {
              dispatch(addToLike(post._id));
            }}
          >
            <AiOutlineLike />
          </p>
        )}

        <p className="icon">
          <BiComment />
        </p>

        {isBookMarked ? (
          <p
            className="icon"
            onClick={() => {
              dispatch(removeBookmark(post._id));
            }}
          >
            <BsFillBookmarkFill />
          </p>
        ) : (
          <p
            className="icon"
            onClick={() => {
              dispatch(addToBookmark(post._id));
            }}
          >
            <BsBookmark />
          </p>
        )}
      </span>
    </div>
  );
};

export { Post };
