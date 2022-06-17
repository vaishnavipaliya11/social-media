import React, { useEffect, useState } from "react";
import "./Post.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { IoOptions } from "react-icons/io5";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EdiPostModal } from "../modal/editModal";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { Avatar, WrapItem } from "@chakra-ui/react";
import {
  deletePosts,
  getUserId,
  getSelectedPost,
  getCommentId,
} from "../../features/postSlice";
import { addToBookmark, removeBookmark } from "../../features/bookmarkSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addToLike, removeLike } from "../../features/postSlice";
import { CommentModal } from "../modal/commentModal";
import { deleteUserComment, getAllComments } from "../../features/commentApi";
import { EditCommentModal } from "../modal/editCommentModal";

const Post = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { bookmark } = useSelector((store) => store.bookmark);
  const { token,user } = useSelector((store) => store.timeline);
  const [editModal, setEditModal] = useState(false);
  const [editCommentModal, setEditCommentModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);

  const isBookMarked = bookmark?.find((postId) => postId === post._id);
  useEffect(() => {
    dispatch(getAllComments(post._id));
  }, []);

  const navigate = useNavigate();

 
  return (
    <Box>
      <Box className="post-container">
        <Box className="menu-container">
          <span className="dis-row">
            <img className="avatar-img" src={post?.userAvtar || user.userImage} />
            <h3 className="user-name">{post?.username}</h3>
            <p className="user-id">@{post?.username}</p>
          </span>

          <span>
            <Menu>
              <MenuButton className="edit-btn" as={Button}>
                <IoOptions />
              </MenuButton>

              <MenuList>
                <MenuItem
                  onClick={() => {
                    onOpen();
                    token ? dispatch(getUserId(post._id)) : navigate("/login");

                    setEditModal(true);
                  }}
                >
                  Edit
                </MenuItem>
                {editModal && (
                  <EdiPostModal onClose={onClose} isOpen={isOpen} />
                )}
                <MenuItem
                  onClick={() => {
                    token
                      ? dispatch(deletePosts(post._id))
                      : navigate("/login");
                  }}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>{" "}
          </span>
        </Box>

        <Link to={`/singlepost/${post._id}`}>
        <section className="post-text"> {post.content}</section>
        </Link>
    
        <span className="post-bottom-icons">
          {post?.likes?.likeCount >= 1 ? (
            <p
              className="icon"
              onClick={() =>
                token ? dispatch(removeLike(post._id)) : navigate("/login")
              }
            >
              <Box className="dis-row">
                <AiFillLike />
                <span>{post?.likes?.likeCount}</span>
              </Box>
            </p>
          ) : (
            <p
              className="icon"
              onClick={() =>
                token ? dispatch(addToLike(post._id)) : navigate("/login")
              }
            >
              <AiOutlineLike />
            </p>
          )}

          <button
            className="comment-btn"
            onClick={() => {
              onOpen();
              token ? dispatch(getSelectedPost(post)) : navigate("/login");

              setCommentModal(true);
              setEditCommentModal(false);
            }}
          >
            {commentModal && <CommentModal onClose={onClose} isOpen={isOpen} />}
            <BiComment />
          </button>

          {isBookMarked ? (
            <p
              className="icon"
              onClick={() =>
                token ? dispatch(removeBookmark(post._id)) : navigate("/login")
              }
            >
              <BsFillBookmarkFill />
            </p>
          ) : (
            <p
              className="icon"
              onClick={() =>
                token ? dispatch(addToBookmark(post._id)) : navigate("/login")
              }
            >
              <BsBookmark />
            </p>
          )}
        </span>
      </Box>

      {post?.comments?.map((commentData) => {
        return (
          <Box
            display="flex"
            justifyContent="space-between"
            padding="0.5rem"
            w="100%"
            p="6"
            rounded="md"
          >
            <Box display="flex" padding="0.5rem">
              <Box padding="0.5rem">
                <WrapItem>
                  <Avatar
                    size="xs"
                    
                    src={commentData?.userAvtar || user?.userImage}
                  />
                </WrapItem>
              </Box>
              <Box display="flex" flexDirection="column" padding="0.5rem">
                <Heading size="lg" fontSize="10px">
                  {commentData?.username}
                </Heading>
                {commentData?.text}
              </Box>
            </Box>
            <Box>
              <Menu>
                <MenuButton as={Button}>:</MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      onOpen();
                      setEditCommentModal(true);
                      setCommentModal(false);
                      dispatch(getUserId(post._id));
                      dispatch(getCommentId(commentData._id));
                    }}
                  >
                    Edit
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      dispatch(deleteUserComment({id:post._id, commentId:commentData._id}));
                    }}
                  >
                    delete
                  </MenuItem>
                  {editCommentModal && (
                    <EditCommentModal onClose={onClose} isOpen={isOpen} />
                  )}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export { Post };
