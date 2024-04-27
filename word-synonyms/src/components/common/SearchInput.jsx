const SearchInput = ({
  handleChange,
  value,
  handleSearchAction,
  label,
  buttonText,
  isValid,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchAction();
    }
  };

  return (
    <>
      <label className="text-black-500 font-semibold">{label}</label>
      <input
        type="text"
        name="word"
        className={`input ${isValid ? "" : "input-invalid"}`}
        placeholder="Please Enter The Word"
        pattern=".*\S.*"
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        onClick={handleSearchAction}
        disabled={!isValid || !value}
        className={`mt-1 ${isValid ? "btn" : "btn-disabled"} ${
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
