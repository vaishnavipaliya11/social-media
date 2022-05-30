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
import { editUserComment } from "../../features/commentApi";

export const EditCommentModal = ({ isOpen, onClose }) => {
  const [commentData, setCommentData] = useState("");
  const dispatch = useDispatch();
  const { id, commentId } = useSelector((store) => store.post);
  const [editModal,setEditModal]= useState(false)

  const editCommentHandler = () => {
    dispatch(editUserComment({id,commentId,commentData}));
    onClose();
    setEditModal(false)
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e) => setCommentData(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button
              className="tweet-btn"
              onClick={() => editCommentHandler()}
              variant="ghost"
            >
              update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
