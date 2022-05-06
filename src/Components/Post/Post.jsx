import React from "react";
import "./Post.css";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const Post = () => {
  return (
    <div className="post-container">
      <div className="post-card">
        <div className="post-card-profile-name">
          <CgProfile />
          <h3>Vaishnavi Paliya</h3>
          <small>@vaishnavipaliya</small>
        </div>

        <p>programming is a good thing to do so.</p>
        <div className="post-card-icons">
          <AiOutlineHeart />
          <BiComment />

          <AiOutlineShareAlt />
          <BsBookmark />
        </div>
      </div>
    </div>
  );
};

export { Post };
