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
  Heading,
  Stack,
  Text,
  Input,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../features/commentApi";

export const CommentModal = ({ isOpen, onClose }) => {
  const { singlePost } = useSelector((store) => store.post);

  const [userComment, setUserComment]= useState("")
  const {_id,content, username } = singlePost;

  const { id } = useSelector((store) => store.post);
  const dispatch = useDispatch()



  const commentHandler = ()=>{
    dispatch(addComment({userComment,_id}))
    onClose();
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box style={{padding:"0.5rem"}}>
              <Heading as="h2" size="xs">
                {username}
              </Heading>
              <Stack className="pd-med">
                <Text fontSize="med"> {content}</Text>
                <Text fontSize="xs"> replying to @{username}</Text>
              </Stack>
            </Box>
            <hr />
            <Box>
              <Input placeholder="medium size" size="sm" 
              onChange={(e)=>{setUserComment(e.target.value)}}/>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button className="tweet-btn"variant="ghost"
            onClick={()=>commentHandler()}>comment</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
