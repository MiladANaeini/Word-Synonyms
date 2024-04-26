const SearchInput = ({ handleChange, word, searchWord, label }) => {
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
          value={word}
        />
      </label>
      <button onClick={searchWord} className="btn mt-2">
        Search
      </button>
    </>
  );
};

export default SearchInput;
