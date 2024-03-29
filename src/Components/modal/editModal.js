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
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { editPosts } from "../../features/postSlice";

export const EdiPostModal = ({ isOpen, onClose }) => {
  const [edittedPost, setEdittedPost] = useState("");

  const dispatch = useDispatch();
  const { id,post } = useSelector((store) => store.post);

  const editHandler = () => {
    dispatch(editPosts({ edittedPost, id }));
    onClose();
  };
  const specificPost = post.find((eachpost) => eachpost._id === id)
  console.log(specificPost);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input defaultValue={specificPost} 
            onChange={(e) => setEdittedPost(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button
              className="tweet-btn"
              onClick={() => editHandler()}
              variant="ghost"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
