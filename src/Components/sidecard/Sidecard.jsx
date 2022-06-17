import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserApi,
  getAllUsers,
  unfollowUser,
} from "../../features/userApi";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box } from "@chakra-ui/react";
import "./sidecard.css";
export const Sidecard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { allusers } = useSelector((store) => store.user);

  const { token, user } = useSelector((store) => store.timeline);
  const navigate = useNavigate();

  return (
    <Box className="who-to-follow">
      <Box className="dis-row space-around">
        <span className="wtofol">who to follow</span>{" "}
      </Box>

      <Box>
        {allusers.map(
          ({ firstName, lastName, userImage, username, _id, followers }) => {
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
                  {token ? (
                    <div>
                      {followers?.find(
                        (eachuser) => eachuser?.username === user?.username
                      ) ? (
                        <button
                          className="btn-follow"
                          onClick={() => dispatch(unfollowUser(_id))}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <button
                          className="btn-follow"
                          onClick={() => dispatch(followUserApi(_id))}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      className="btn-follow"
                      onClick={() => navigate("/login")}
                    >
                      {" "}
                      follow{" "}
                    </button>
                  )}
                </div>
              </Box>
            );
          }
        )}
      </Box>
    </Box>
  );
};
