// eslint-disable-next-line react/prop-types
export const TextInput = ({ id, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
