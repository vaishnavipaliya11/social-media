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

export const PostModal = ({ isOpen, onClose }) => {
  const [userTweet, setUserTweet] = useState("");
  const { postDispatch } = usePost();
  const { auth } = useAuth();

  const tweetHandler = () => {
    createPost(userTweet, postDispatch);
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
            {auth ? (
              <Button
                className="tweet-btn"
                variant="ghost"
                onClick={tweetHandler}
              >
                Tweet
              </Button>
            ) : (
              <Button
                className="tweet-btn"
                variant="ghost"
                onClick={tweetHandler}
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
