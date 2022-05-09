import React from "react";
import "./Post.css";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const Post = () => {
  return (
    <div className="post-container">
    
      <span className="dis-row">
        <img
          className="avatar-img"
          src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
        />
        <h3 className="user-name">Vaishnavi paliya</h3>
        <p className="user-id">@Vaishnavipaliya</p>
      </span>
      <p className="post-text">
        Even if your team’s customer knowledge is pretty good, doing this is
        not optional. You have to do it. People who work in the corporate
        world are often insulated from immediate customer interactions. You
        work and think in a comfortable office, not outside in the real
        world where your products are actually used.{" "}
      </p>
      <span className="post-bottom-icons">
        <p className="icon"><AiOutlineHeart/></p>
        <p className="icon"><BiComment/></p>
        <p className="icon"><BsBookmark/></p>
        
      </span>
    </div>
  
  );
};

export { Post };
