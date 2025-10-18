const Input = ({
  type,
  placeholder,
  value,
  id,
  className,
  autoComplete,
  setEmail,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      className={className}
      autoComplete={autoComplete}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

export default Input;
