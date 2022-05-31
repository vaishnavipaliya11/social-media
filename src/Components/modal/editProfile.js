import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../../features/userApi";
import { uploadImage } from "../../features/usersSlice";

export const EditProfile = ({ isOpen, onClose }) => {
    const dispatch = useDispatch()
    const [img, setImg]= useState("")
    const {user,userImage} = useSelector(store => store.user)

    const {firstName,lastName,bio,portfolio}= user
    console.log(firstName,lastName,bio,portfolio);
    
    const [userDetails, setUserDetails]= useState({
        firstName:"",
        lastName:"",
        bio:"",
        portfolio:""
    })

    const inputHandler = (e) =>{
        const{name,value}= e.target
        setUserDetails({...userDetails,[name]:value})
    }

    const editHandler = () =>{
        dispatch(editUserProfile(userDetails))
        dispatch(uploadImage(img))
        onClose()
        
    }
    
    const imageHandler = (e)=>{
        
        setImg(URL.createObjectURL(e.target.files[0]))
    }

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Upload Photo</FormLabel>
              <Input type="file" placeholder="Upload Photo"
              onChange={imageHandler} />
            </FormControl>

            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" 
              name="firstName"
              onChange={inputHandler}
              value={userDetails.firstName}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" name="lastName"
              onChange={inputHandler} value={userDetails.lastName} />
            </FormControl>

            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input placeholder="Bio" name="bio"
              onChange={inputHandler} value={userDetails.bio}/>
            </FormControl>

            <FormControl>
              <FormLabel>Portfolio</FormLabel>
              <Input placeholder="Portfolio" name="portfolio"
              onChange={inputHandler} value={userDetails.portfolio} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={editHandler}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
