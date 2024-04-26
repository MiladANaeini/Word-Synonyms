import React, { useEffect, useState } from "react";
import ExistingSynonyms from "../components/ExistingSynonyms";
import AddSynonymForm from "../components/AddSynonym";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "../components/common/IsEmpty";
import Loading from "../components/layout/Loading";
const SearchPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [groupId, setGroupId] = useState(null);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    if (!word) {
      setSynonyms(null);
    }
  }, [word]);

  const searchWord = async () => {
    setIsLoading(true);
    await axios
      .get(`http://localhost:3000/words/${word.trim()}`)
      .then((res) => {
        if (!isEmpty(res.data)) {
          setGroupId(res.data[0]?.groupId);
        }
        setSynonyms(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error?.response?.data.error);
        setSynonyms([]);
        setIsLoading(false);
      });
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
        {word && synonyms?.length ? (
          <>
            <Link
              to={`/add`}
              state={{
                word: word,
                prevSynonyms: synonyms,
              }}
            >
              <button className="btn mt-2">Add Synonyms</button>
            </Link>
            <ExistingSynonyms
              word={word}
              synonyms={synonyms}
              setIsLoading={setIsLoading}
              groupId={groupId}
              searchWord={searchWord}
            />
          </>
        ) : (
          <AddSynonymForm word={word} synonyms={synonyms} />
        )}
        <Loading />
      </div>
    </section>
  );
};

export default SearchPage;
