import PropTypes from "prop-types";
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

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  handleSearchAction: PropTypes.func,
  label: PropTypes.string,
  buttonText: PropTypes.string,
  isValid: PropTypes.bool,
};

SearchInput.defaultProps = {
  handleChange: () => {},
  value: "",
  handleSearchAction: () => {},
  label: "",
  buttonText: "",
  isValid: true,
};
export default SearchInput;
