import { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../components/common/data.json";

const AddPage = () => {
  const [newWord, setNewWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);

  const location = useLocation();
  const { word } = location.state;
  const path = location.pathname.split("/");
  const groupId = path[path.length - 1];

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };
  const addToList = () => {
    if (!synonyms) {
      let allSynonyms = [{ value: word, groupId: groupId }];
      allSynonyms = [...allSynonyms, { value: newWord, groupId: groupId }];
      setSynonyms(allSynonyms);
      setNewWord("");

      return;
    }
    setSynonyms([...synonyms, { value: newWord, groupId: groupId }]);
    setNewWord("");
  };
  const submitSynonyms = () => {
    synonyms.map((item) => {
      data.words.push(item);
    });
  };
  setTimeout(() => {
    console.log("data", data);
  }, 1000);
  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <label className="text-black-500 font-semibold">
          Add Synonyms to {word}
          <input
            type="text"
            name="word"
            className="input"
            placeholder="Please Enter The Word"
            required
            onChange={handleChange}
            value={newWord}
          />
          <button className="btn" onClick={addToList}>
            Add To List
          </button>
          <button className="btn" onClick={submitSynonyms}>
            Sumbit
          </button>
          {console.log("synonyms", synonyms)}
        </label>
      </div>
    </section>
  );
};

export default AddPage;
