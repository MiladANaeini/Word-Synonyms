const SearchInput = ({
  handleChange,
  value,
  handleAction,
  label,
  buttonText,
  isValid,
}) => {
  return (
    <>
      <label className="text-black-500 font-semibold">
        {label}
        <input
          type="text"
          name="word"
          className={`input ${isValid ? "" : "input-invalid"}`}
          placeholder="Please Enter The Word"
          pattern="[a-zA-Z0-9]+"
          onChange={handleChange}
          value={value}
        />
      </label>
      <button
        onClick={handleAction}
        disabled={!isValid || !value}
        className={`mt-2 ${isValid ? "btn" : "btn-disabled"} ${
          value ? "btn" : "btn-disabled"
        }`}
      >
        {buttonText}
      </button>
      {!isValid && <p className="text-red-500">Please enter your word</p>}
    </>
  );
};

export default SearchInput;
