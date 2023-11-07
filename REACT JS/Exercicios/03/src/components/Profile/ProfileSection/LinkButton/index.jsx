import "./link-button.css";

// eslint-disable-next-line react/prop-types
export const LinksButton = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
