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
  Box,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { createPosts } from "../../features/postSlice.js";
import { useNavigate } from "react-router-dom";
import "./modal.css";

export const PostModal = ({ isOpen, onClose }) => {
  const [userTweet, setUserTweet] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.timeline);
  const token = localStorage.getItem("token");

  const tweetHandler = () => {
    dispatch(createPosts(userTweet));
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} backgroundColor="tomato">
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
                onClick={() => {
                  onClose();
                  navigate("/login");
                }}
              >
                {" "}
                Tweet
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
