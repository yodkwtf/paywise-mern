const Input = ({
  labelFor,
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  autoComplete,
  className,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={className}
      />
    </div>
  );
};
export default Input;
