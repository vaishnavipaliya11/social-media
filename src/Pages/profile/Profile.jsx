import React from "react";

export const Profile = () => {
  return (
   
      <div className="user-profile">
        <img
          className="profile-img"
          src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/05/shaktiman-1462557537.jpg"
        />
        <div className="dis-col">
          {" "}
          <h3 className="profile-user-name">Vaishnavi paliya</h3>
          <p className="profile-user-id">@Vaishnavipaliya</p>
        </div>
        <button className="edit-profile">Edit Profile</button>
        <div className="profile-bio">
          i'm FrontEnd Developer i build fully functional FrontEnd Sites with
          React JS / Redux . i'll suggest you to have a look at my Projects in
          "Projects" section
        </div>
        <a>www.Vaishnavipaliya.com</a>
        <div>
          <div className="dis-row user-stats">
            <div className="dis-col">
              <h4>02</h4>
              <h4>following</h4>
            </div>
            <div className="dis-col">
              <h4>02</h4>
              <h4>following</h4>
            </div>
            <div className="dis-col">
              <h4>02</h4>
              <h4>following</h4>
            </div>
          </div>
        </div>
      </div>
   
  );
};
