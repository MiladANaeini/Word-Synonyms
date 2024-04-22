import { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../components/common/data.json";
import { Link } from "react-router-dom";
import ExistingSynonyms from "../components/ExistingSynonyms";

const AddPage = () => {
  const [newWord, setNewWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { word } = location.state;
  const path = location.pathname.split("/");
  const groupId = path[path.length - 1];

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };
  const addToList = () => {
    if (!synonyms) {
      let allSynonyms = [
        { value: word, groupId: groupId },
        { value: newWord, groupId: groupId },
      ];
      setSynonyms(allSynonyms);
      allSynonyms.map((item) => {
        data.words.push(item);
      });
      setNewWord("");
      return;
    }
    data.words.push({ value: newWord, groupId: groupId });
    setSynonyms([...synonyms, { value: newWord, groupId: groupId }]);
    setNewWord("");
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
        </label>
        <button className="btn" onClick={addToList}>
          Add To List
        </button>
        <Link to={`/search`}>
          <button className="btn">Search Page</button>
        </Link>
        {synonyms && (
          <>
            <ExistingSynonyms synonyms={synonyms} isLoading={isLoading} />
          </>
        )}
        {console.log("synonyms", synonyms)}
      </div>
    </section>
  );
};

export default AddPage;
