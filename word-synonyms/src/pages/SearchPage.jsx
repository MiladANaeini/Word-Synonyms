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

  // const { getData, result, isLoading } = useFetchData({
  //   url: `${SEARCH_WORD_URL}/${word.trim()}`,
  //   enabled: false,
  //   callBack: (result) => {
  //     setSynonyms(result);
  //   },
  // });
  const searchWord = async () => {
    setIsLoading(true);
    await axios
      .get(`${SEARCH_WORD_URL}/${word.trim()}`)
      .then((res) => {
        if (!isEmpty(res.data)) {
          setGroupId(res.data[0]?.groupId);
        }
        setSynonyms(res.data);
      })
      .catch((error) => {
        console.log(error?.response?.data.error);
        setSynonyms([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <SearchInput
          handleChange={handleChange}
          value={word}
          label={"Search for Synonyms:"}
          handleAction={searchWord}
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
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              groupId={groupId}
              searchWord={searchWord}
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
