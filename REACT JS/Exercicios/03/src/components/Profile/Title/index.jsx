/* eslint-disable react/prop-types */
import "./title.css";

export const Title = ({ children }) => {
  return (
    <>
      <h2 className="wrapper-title">{children}</h2>
    </>
  );
};
