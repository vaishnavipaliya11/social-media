import { Box ,Button} from "@chakra-ui/react";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,Input,FormLabel
  } from '@chakra-ui/react'

export const EditProfile = ({isOpen,onClose}) => {
  return (
    <Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

          <FormControl>
          <FormLabel>Upload Photo</FormLabel>
          <Input type = "file" placeholder="Upload Photo" />
        </FormControl>

            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input placeholder="Bio" />
            </FormControl>

            <FormControl>
              <FormLabel>Portfolio</FormLabel>
              <Input placeholder="Portfolio" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
