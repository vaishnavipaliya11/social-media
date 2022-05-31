import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/userApi";
import { Avatar, Box, Button, Heading, Link, useDisclosure } from "@chakra-ui/react";
import "./sidecard.css";
export const Sidecard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { allusers } = useSelector((store) => store.user);
  console.log(allusers);
  return (
    <Box className="who-to-follow">
      <Box className="dis-row space-around">
        <span className="wtofol">who to follow</span>{" "}
      </Box>

      <Box>
      {allusers.map(({firstName,lastName,userImage,username})=>{
        return(
          <Box className="dis-row space-around pd-med" >
          <Avatar
            className="avatar-img"
            alt="avatar"
            src={userImage}
          />
          <span className="dis-col">
          <Link to={`/singleprofile/${profile_id}`}>
            <Heading as="h2" size="sm" className="usr-name">
              {firstName} {lastName}
            </Heading>
            </Link>
            <p className="usr-id">@{username}</p>
          </span>{" "}
          <Button borderRadius="2rem" className="btn-follow">Follow</Button>
        </Box>
        )
      })}
      </Box>
    </Box>
  );
};
