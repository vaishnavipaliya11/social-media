import React from "react";
import "./sidecard.css"
export const Sidecard = () => {
  return (
    <div className="who-to-follow">
      <div className="dis-row space-around">
        <span className="wtofol">who to follow</span>{" "}
        <button className="btn-follow">show-more</button>
      </div>
      <div className="dis-row space-around">
        {" "}
        <img
          className="avatar-img"
          alt="avatar"
          src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
        />
        <span className="dis-col">
          <h3 className="usr-name">Vaishnavi paliya</h3>
          <p className="usr-id">@Vaishnavipaliya</p>
        </span>{" "}
        <button className="btn-follow">Follow +</button>
      </div>
      <div className="dis-row space-around">
      {" "}
      <img
        className="avatar-img"
        alt="avatar"
        src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
      />
      <span className="dis-col">
        <h3 className="usr-name">Vaishnavi paliya</h3>
        <p className="usr-id">@Vaishnavipaliya</p>
      </span>{" "}
      <button className="btn-follow">Follow +</button>
    </div>
    </div>
  );
};
