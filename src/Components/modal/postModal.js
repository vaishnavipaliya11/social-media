import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, Textarea
} from "@chakra-ui/react";

export const PostModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let's Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea 
            placeholder="What's Happening ?"/>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Tweet</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
