const Textarea = ({ labelFor, label, name, id, value, onChange }) => {
  return (
    <>
      <label htmlFor={labelFor}>{label}</label>
      <textarea name={name} id={id} value={value} onChange={onChange} />
    </>
  );
};
export default Textarea;
