import PropTypes from "prop-types";

export const Input = ({ passwordSize, setPasswordSize }) => {
  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      value={passwordSize}
      onChange={(ev) => setPasswordSize(+ev.target.value)}
    />
  );
};

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};
