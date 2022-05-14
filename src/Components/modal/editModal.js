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
import { editUserPost } from "../../utilities/editUserPost";
import { usePost } from "../../context/postContext";

export const EdiPostModal = ({ isOpen, onClose }) => {
    const [editPost,setEditPost]= useState("")
    const{postState,postDispatch}= usePost()
const {id}= postState
    console.log(id);
    console.log(editPost);

   
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=> setEditPost(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
           
            <Button className="tweet-btn"
             onClick={()=>{
              onClose()
              editUserPost(id,editPost,postDispatch)
             }
           }
            variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
