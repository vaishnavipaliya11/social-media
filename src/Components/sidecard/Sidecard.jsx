import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserApi,
  getAllUsers,
  unfollowUser,
} from "../../features/userApi";
import { Link, useParams } from "react-router-dom";
import { Avatar, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import "./sidecard.css";
export const Sidecard = ({ currentUser }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { allusers, followUser } = useSelector((store) => store.user);

  const { user } = useSelector((store) => store.timeline);
  // const currentUser = allusers?.find((item) => item.username === username);

  console.log("user", user);
  console.log("allusers", allusers);
  return (
    <Box className="who-to-follow">
      <Box className="dis-row space-around">
        <span className="wtofol">who to follow</span>{" "}
      </Box>

      <Box>
        {allusers.map(({ firstName, lastName, userImage, username, _id,followers }) => {
          return (
            <Box className="dis-row space-around pd-med" key={_id}>
              <Avatar className="avatar-img" alt="avatar" src={userImage} />
              <span className="dis-col">
                <Link to={`/profile/${username}`}>
                  {firstName} {lastName}
                </Link>
                <p className="usr-id">@{username}</p>
              </span>{" "}
              <div className="text-center">
                <div className="text-center">
                  {followers?.find(
                    (eachuser) => eachuser?.username === user?.username
                  ) ? (
                    <button onClick={() => dispatch(unfollowUser(_id))}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => dispatch(followUserApi(_id))}>
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
