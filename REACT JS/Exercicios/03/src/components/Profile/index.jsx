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
  return (
    <>
      <div className="wrapper">
        <Avatar src={profileImg} alt={name}></Avatar>
        <Title>{name}</Title>
        <ProfileSection>{bio}</ProfileSection>
        <ProfileSection>{email}</ProfileSection>
        <ProfileSection>{phone}</ProfileSection>
        <ProfileSection>
          {" "}
          <LinksButton href={githubUrl}>GitHub</LinksButton>
          <LinksButton href={linkedinUrl}>LinkedIn</LinksButton>
          <LinksButton href={twitterUrl}>Twitter</LinksButton>
        </ProfileSection>
      </div>
    </>
  );
};
