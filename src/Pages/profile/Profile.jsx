import React from "react";
import "./Profile.css"
import { Avatar, Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Profile = () => {
  return (
   
      <Box className="user-profile">
        <Avatar
        size='2xl'
          // className="profile-img"
          src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
        />
        <Box className="dis-col">
          {" "}
          <Heading as='h2' size='lg' className="profile-user-name pd-med">Vaishnavi paliya</Heading>
          <p className="profile-user-id pd-xs">@Vaishnavipaliya</p>
        </Box>
        <Button className="edit-profile">Edit Profile</Button>
        <Box className="profile-bio pd-med">
          i'm FrontEnd Developer i build fully functional FrontEnd Sites with
          React JS / Redux . i'll suggest you to have a look at my Projects in
          "Projects" section
        </Box>
        <a href="https://vaishnavirpaliya-portfolio.netlify.app/">https://vaishnavirpaliya-portfolio.netlify.app/</a>
        <Box>
          <Box className="dis-row user-stats">
            <Box className="dis-col">
              <Heading as='h5' size='sm'>02</Heading>
              <Heading as='h5' size='sm'>following</Heading>
            </Box>
            <Box className="dis-col">
              <Heading as='h5' size='sm'>02</Heading>
              <Heading as='h5' size='sm'>following</Heading>
            </Box>
            <Box className="dis-col">
              <Heading as='h5' size='sm'>02</Heading>
              <Heading as='h5' size='sm'>following</Heading>
            </Box>
          </Box>
        </Box>
      </Box>
   
  );
};
