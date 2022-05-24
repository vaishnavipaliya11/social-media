import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { createPost } from "../../utilities/createPost";
import { usePost } from "../../context/postContext";
import { useAuth } from "../../context/authContext";
import { useSelector, useDispatch } from "react-redux";
import { createPosts } from "../../features/postSlice.js";
import { useNavigate } from "react-router-dom";

export const PostModal = ({ isOpen, onClose }) => {
  const [userTweet, setUserTweet] = useState("");
  const { postDispatch } = usePost();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.timeline);
  const token = localStorage.getItem("token");

  const tweetHandler = () => {
    dispatch(createPosts(userTweet));
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let's Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              onChange={(e) => setUserTweet(e.target.value)}
              placeholder="What's Happening ?"
            />
          </ModalBody>

          <ModalFooter>
            {token ? (
              <Button
                className="tweet-btn"
                variant="ghost"
                onClick={() => tweetHandler()}
              >
                Tweet
              </Button>
            ) : (
              <Button
                className="tweet-btn"
                variant="ghost"
                onClick={() => tweetHandler()}
                disabled
              >
                {" "}
                Tweet
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
