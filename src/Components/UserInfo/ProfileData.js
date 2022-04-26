import React from "react";
import "./styles.css";

function ProfileData({ user }) {
  return (
    <div className="userDetailsContainer">
      <div className="profilePic">
        <img src={user.avatar_url} alt="GitHub user's profile" />
      </div>
      <div className="profileName">
        Details : <a href={user.html_url}>{user.login}</a>
      </div>
      <div className="profileDetails">
        <dl>
          <dt>Name</dt> <dd>{user.name}</dd>
          <dt>Location</dt> <dd>{user.location}</dd>
          <dt>Followers</dt> <dd>{user.followers}</dd>
          <dt>Following</dt> <dd>{user.following}</dd>
          <dt>About</dt> <dd>{user.bio}</dd>
          <dt>Joined</dt> <dd>{new Date(user.created_at).toLocaleString()}</dd>
          <dt>Last Updated</dt>{" "}
          <dd>{new Date(user.updated_at).toLocaleString()}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ProfileData;
