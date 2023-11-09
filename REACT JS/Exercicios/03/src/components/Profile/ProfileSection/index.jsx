import "./profile-section.css";

// eslint-disable-next-line react/prop-types
export const ProfileSection = ({ children, ...links }) => {
  return (
    <div className="wrapper-profile-section">
      {" "}
      <div {...links}>{children}</div>
    </div>
  );
};
