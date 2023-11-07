import "./profile-section.css";

// eslint-disable-next-line react/prop-types
export const ProfileSection = ({ children }) => {
  return (
    <div className="wrapper-profile-section">
      {" "}
      <div className="wrapper-link-button">{children}</div>
    </div>
  );
};
