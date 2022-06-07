import React, { useEffect, useState } from "react";
import "./Post.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
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
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from "@chakra-ui/react";
import {
  deletePosts,
  getUserId,
  getSelectedPost,
  getCommentId,
} from "../../features/postSlice";
import { addToBookmark, removeBookmark } from "../../features/bookmarkSlice";
import { useNavigate } from "react-router-dom";
import { addToLike, removeLike } from "../../features/postSlice";
import { CommentModal } from "../modal/commentModal";
import { deleteUserComment, getAllComments } from "../../features/commentApi";
import { EditCommentModal } from "../modal/editCommentModal";

const Post = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { bookmark } = useSelector((store) => store.bookmark);
  const { token } = useSelector((store) => store.timeline);
  const [editModal, setEditModal] = useState(false);
  const [editCommentModal, setEditCommentModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);

  const isBookMarked = bookmark?.find((item) => item._id === post._id);
  useEffect(() => {
    dispatch(getAllComments(post._id));
  }, []);

  const { id, commentId } = useSelector((store) => store.post);

  return (
    <div>
      <div className="post-container">
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
          {post?.likes?.likeCount >= 1 ? (
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

          <Button
            className="icon"
            onClick={() => {
              onOpen();
              dispatch(getSelectedPost(post));
              setCommentModal(true);
              setEditCommentModal(false);
            }}
          >
            {commentModal && <CommentModal onClose={onClose} isOpen={isOpen} />}
            <BiComment />
          </Button>

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

      {post?.comments.map((commentData) => {
        return (
          <Box
            display="flex"
            justifyContent="space-between"
            padding="0.5rem"
            w="100%"
           
            color="black"
            boxShadow='xs' p='6' rounded='md' bg='white'
          >
            <Box display="flex" padding="0.5rem">
              <Box padding="0.5rem">
                <WrapItem>
                  <Avatar
                    size="xs"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Box>
              <Box display="flex" flexDirection="column" padding="0.5rem">
                <Heading size="lg" fontSize="10px">
                  {commentData.username}
                </Heading>
                {commentData.text}
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
                  {editCommentModal && (
                    <EditCommentModal onClose={onClose} isOpen={isOpen} />
                  )}
                  <MenuItem
                    onClick={() => {
                      dispatch(
                        deleteUserComment({
                          id: post._id,
                          commentId: commentData._id,
                        })
                      );
                    }}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export { Post };
