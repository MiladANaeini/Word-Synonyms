import React, { useState } from "react";
import ExistingSynonyms from "../components/ExistingSynonyms";
import AddSynonymForm from "../components/AddSynonym";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [synonymId, setSynonymId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const searchWord = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/words/${word}`)
      .then((res) => {
        console.log("res", res);
        setSynonyms(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setSynonyms([]);
      });
    setIsLoading(false);
  };
  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <label className="text-black-500 font-semibold">
          Search for Synonyms:
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
        {synonyms && (
          <>
            {synonyms.length ? (
              <>
                <Link
                  to={`/add/${synonymId}`}
                  state={{ word: word, prevSynonyms: synonyms }}
                >
                  <button className="btn mt-2">Add Synonyms</button>
                </Link>
                <ExistingSynonyms
                  word={word}
                  synonyms={synonyms}
                  isLoading={isLoading}
                />
              </>
            ) : (
              <AddSynonymForm word={word} />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
