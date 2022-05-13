import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Button,Input
} from "@chakra-ui/react";

export const EdiPostModal = ({ isOpen, onClose }) => {
    const [editPost,setEditPost]= useState("")

    const editPostHandler = ()=>{
        console.log(editPost);
    }
  return (
    <div>
      editModal
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=> setEditPost(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
           
            <Button className="tweet-btn" onClick={editPostHandler}
            variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
