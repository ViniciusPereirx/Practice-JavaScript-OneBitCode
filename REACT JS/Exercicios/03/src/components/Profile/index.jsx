/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

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
        <img src={profileImg} alt={name} />
        <p>{name}</p>
        <hr />
        <p>{bio}</p>
        <hr />
        <p>{phone}</p>
        <hr />
        <p>{email}</p>
        <hr />
        <p>
          {" "}
          <a
            href="https://github.com/ViniciusPereirx"
            target="_blank"
            rel="noreferrer"
          >
            {githubUrl}
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://www.linkedin.com/in/viniciuspereiradev/"
            target="_blank"
            rel="noreferrer"
          >
            {linkedinUrl}
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            {twitterUrl}
          </a>
        </p>
      </div>
    </>
  );
};
