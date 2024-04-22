import { useState } from "react";

const AddPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <label className="text-black-500 font-semibold">
          Add Synonyms to
          <input
            type="text"
            name="word"
            className="input"
            placeholder="Please Enter The Word"
            required
            onChange={handleChange}
            value={word}
          />
          <button className="btn">Add</button>
        </label>
      </div>
    </section>
  );
};

export default AddPage;
