import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { EditProfile } from "../../Components/modal/editProfile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserFromDb } from "../../features/userApi";
export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { users, singleUser, userImage, allusers } = useSelector(
    (store) => store.user
  );
  const { username } = useParams();
  const { user } = useSelector((store) => store.timeline);
  console.log(user);

  const currentUser = allusers?.find((item) => item.username === username);

  return (
    <Box className="user-profile">
      <Avatar size="2xl" src={currentUser?.userImage} />
      <Box className="dis-col">
        {" "}
        <Heading as="h2" size="lg" className="profile-user-name pd-med">
          {currentUser?.firstName} {currentUser?.lastName}
        </Heading>
        <p className="profile-user-id pd-xs">@{currentUser?.username}</p>
      </Box>

      {currentUser?.username === user?.username ? (
        <div>
          {" "}
          <Button className="edit-profile" onClick={onOpen}>
            Edit Profile
          </Button>
          {<EditProfile onClose={onClose} isOpen={isOpen} />}
        </div>
      ) : (
        <div>
          {" "}
          <h1>can't upadte</h1>
        </div>
      )}

      <Box className="profile-bio pd-med">{currentUser?.bio}</Box>
      <a href={`${currentUser?.portfolio}`}>{currentUser?.portfolio}</a>
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
