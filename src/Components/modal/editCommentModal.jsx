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

export const EditCommentModal = ({ isOpen, onClose }) => {
    const [editComment, setEditComment ]= useState("")

    const {id,post, commentId}= useSelector(store => store.post)
    console.log(id);

    console.log("comment id",commentId);

   
    const editCommentHandler = () =>{

    }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=>setEditComment(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
            <Button className="tweet-btn" variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
