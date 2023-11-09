/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { LinksButton } from "./ProfileSection/LinkButton";
import { Title } from "./Title";
import { ProfileSection } from "./ProfileSection";
import "./profile.css";
import { Avatar } from "./Avatar";

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
  const handleClick = () => {
    alert(`Você está seguindo ${name}`);
  };

  return (
    <>
      <div className="wrapper">
        <Avatar src={profileImg} alt={name}></Avatar>
        <Title>
          {name}{" "}
          <button className="follow-button" onClick={handleClick}>
            Follow
          </button>
        </Title>
        <ProfileSection>{bio}</ProfileSection>
        <ProfileSection>{email}</ProfileSection>
        <ProfileSection>{phone}</ProfileSection>
        <ProfileSection className="links">
          {" "}
          <LinksButton href={githubUrl}>GitHub</LinksButton>
          <LinksButton href={linkedinUrl}>LinkedIn</LinksButton>
          <LinksButton href={twitterUrl}>Twitter</LinksButton>
        </ProfileSection>
      </div>
    </>
  );
};
