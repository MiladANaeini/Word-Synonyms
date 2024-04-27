import PropTypes from "prop-types";
const SearchInput = ({
  handleChange,
  value,
  handleSearchAction,
  label,
  buttonText,
}) => {
  const handleKeyPress = ({ key }) => {
    if (key === "Enter" && value) {
      handleSearchAction();
    }
  };

  return (
    <>
      <h3 className="w-full text-left">{label}</h3>
      <div className="w-full flex items-center gap-2 whitespace-nowrap">
        <input
          type="text"
          name="word"
          className="w-full input"
          placeholder="Please Enter The Word"
          pattern=".*\S.*"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyPress}
        />
        <button
          type="submit"
          onClick={handleSearchAction}
          disabled={!value}
          className={`flex-1 ${!!value ? "btn" : "btn-disabled"}`}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  handleSearchAction: PropTypes.func,
  label: PropTypes.string,
  buttonText: PropTypes.string,
};

SearchInput.defaultProps = {
  handleChange: () => {},
  value: "",
  handleSearchAction: () => {},
  label: "",
  buttonText: "",
};
export default SearchInput;
