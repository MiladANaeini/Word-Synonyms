import { useEffect, useState } from "react";
import ExistingSynonyms from "../components/ExistingSynonyms";
import AddSynonymForm from "../components/AddSynonym";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "../components/common/IsEmpty";
import { Loading } from "../components/common/Loading";
import { SEARCH_WORD_URL } from "../constants/constants";
import SearchInput from "../components/common/SearchInput";
import useFetchData from "../components/hooks/useFetchData";
const SearchPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setWord(e.target.value);
    setIsValid(e.target.validity.valid);
  };

  useEffect(() => {
    if (!word) {
      setSynonyms(null);
    }
  }, [word]);

  const { getData, isLoading } = useFetchData({
    url: `${SEARCH_WORD_URL}/${word.trim()}`,
    enable: false,
    callBack: (res) => {
      setSynonyms(res);
      if (!isEmpty(res)) {
        setGroupId(res[0]?.groupId);
      }
    },
  });

  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <SearchInput
          isValid={isValid}
          handleChange={handleChange}
          value={word}
          label={"Search for Synonyms:"}
          handleSearchAction={getData}
          buttonText={"Search"}
        />
        <Loading loading={isLoading} />
        {word && synonyms?.length ? (
          <>
            <Link
              to={`/add`}
              state={{
                word: word,
              }}
            >
              <button className="btn mt-2">Add Synonyms</button>
            </Link>
            <ExistingSynonyms
              word={word}
              synonyms={synonyms}
              groupId={groupId}
              searchWord={getData}
            />
          </>
        ) : (
          <AddSynonymForm word={word} synonyms={synonyms} />
        )}
      </div>
    </section>
  );
};

export default SearchPage;
