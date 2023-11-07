import "./avatar.css";

// eslint-disable-next-line react/prop-types
export const Avatar = ({ src, name }) => {
  return (
    <>
      <img src={src} alt={name} />
    </>
  );
};
