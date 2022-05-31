import React, { useState } from "react";
import "../profile/Profile.css";
import { Avatar, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { EditProfile } from "../../Components/modal/editProfile";
import { useSelector } from "react-redux";

export const SingleProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {userImage}= useSelector(store => store.user)
  return (
    <Box className="user-profile">
    <h1>SingleProfile Page</h1>
      <Avatar
        size="2xl"
        src={userImage}
      />
      <Box className="dis-col">
        {" "}
        <Heading as="h2" size="lg" className="profile-user-name pd-med">
          Vaishnavi paliya
        </Heading>
        <p className="profile-user-id pd-xs">@Vaishnavipaliya</p>
      </Box>
      <Button
        className="edit-profile"
        onClick={onOpen}
      >
        Edit Profile
      </Button>
      { <EditProfile onClose={onClose} isOpen={isOpen} />}
      <Box className="profile-bio pd-med">
        i'm FrontEnd Developer i build fully functional FrontEnd Sites with
        React JS / Redux . i'll suggest you to have a look at my Projects in
        "Projects" section
      </Box>
      <a href="https://vaishnavirpaliya-portfolio.netlify.app/">
        https://vaishnavirpaliya-portfolio.netlify.app/
      </a>
      <Box>
        <Box className="dis-row user-stats">
          <Box className="dis-col">
            <Heading as="h5" size="sm">
              02
            </Heading>
            <Heading as="h5" size="sm">
              following
            </Heading>
          </Box>
          <Box className="dis-col">
            <Heading as="h5" size="sm">
              02
            </Heading>
            <Heading as="h5" size="sm">
              followers
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
