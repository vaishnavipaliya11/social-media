import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { EditProfile } from "../../Components/modal/editProfile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { followUserApi, unfollowUser } from "../../features/userApi";
export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { allusers } = useSelector((store) => store.user);
  const { username } = useParams();
  const { user } = useSelector((store) => store.timeline);

  const currentUser = allusers?.find((item) => item.username === username);
console.log("currentuser",currentUser);
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
        <div></div>
      )}

      <Box className="profile-bio pd-med">{currentUser?.bio}</Box>
      <a href={`${currentUser?.portfolio}`}>{currentUser?.portfolio}</a>
      <Box>
        <Box className="dis-row user-stats">
          <Box className="dis-col">
            <Heading as="h5" size="sm">
              {currentUser?.following.length}
            </Heading>
            <Heading as="h5" size="sm">
              following
            </Heading>
          </Box>
          <Box className="dis-col">
            <Heading as="h5" size="sm">
             {currentUser?.followers.length}
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
