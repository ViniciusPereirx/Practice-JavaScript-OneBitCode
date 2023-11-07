/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./profile.css";

export const Profile = ({
  profileImg,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) => {
  return (
    <>
      <div className="wrapper">
        <img className="avatar" src={profileImg} alt={name} />
        <h2 className="name">{name}</h2>
        <div>{bio}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div className="links">
          {" "}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};
