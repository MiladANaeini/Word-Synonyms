const SearchInput = ({
  handleChange,
  value,
  handleAction,
  label,
  buttonText,
}) => {
  return (
    <>
      <label className="text-black-500 font-semibold">
        {label}
        <input
          type="text"
          name="word"
          className="input"
          placeholder="Please Enter The Word"
          required
          onChange={handleChange}
          value={value}
        />
      </label>
      <button onClick={handleAction} className="btn mt-2">
        {buttonText}
      </button>
    </>
  );
};

export default SearchInput;
