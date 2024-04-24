import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../components/common/data.json";
import { Link } from "react-router-dom";
import ExistingSynonyms from "../components/ExistingSynonyms";
import axios from "axios";

const AddPage = () => {
  const [newWord, setNewWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { word, prevSynonyms } = location.state;
  // const path = location.pathname.split("/");
  // const groupId = path[path.length - 1];

  useEffect(() => {
    if (prevSynonyms) {
      setSynonyms(prevSynonyms);
    }
  }, []);

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };
  const addToList = ({ word, newWord }) => {
    setIsLoading(true);
    const newGroup = {
      word: word,
      synonym: newWord,
    };
    console.log("newGroup", newGroup);
    axios
      .post("http://localhost:3000/add", newGroup)
      .then((res) => {
        let groupId = res.data.groupId;
      })
      .catch((error) => {
        console.error(error.response.data);
        setIsLoading(false);
      });
    setNewWord("");
    searchWord(word);
  };
  const searchWord = () => {
    axios
      .get(`http://localhost:3000/words/${word}`)
      .then((res) => {
        console.log("res", res);
        setSynonyms(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setIsLoading(false);
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
        </label>
        <button className="btn" onClick={() => addToList({ word, newWord })}>
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
      </div>
    </section>
  );
};

export default AddPage;
