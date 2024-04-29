import { useEffect, useState } from "react";
import ExistingSynonyms from "../components/ExistingSynonyms";
import AddSynonymForm from "../components/AddSynonym";
import { Link } from "react-router-dom";
import { isEmpty } from "../helpers/IsEmpty";
import { Loading } from "../components/common/Loading";
import { SEARCH_WORD_URL } from "../constants/ApiUrls";
import SearchInput from "../components/common/SearchInput";
import useFetchData from "../components/hooks/useFetchData";
import { ROUTES_URL } from "../constants/RoutesUrl";

const SearchPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [groupId, setGroupId] = useState(null);

  const handleChange = (e) => {
    setWord(e.target.value.trim());
  };

  useEffect(() => {
    if (!word) {
      setSynonyms(null);
    }
  }, [word]);

  const { getData, loading } = useFetchData({
    url: `${SEARCH_WORD_URL}/${word}`,
    enable: false,
    callBack: (res) => {
      setSynonyms(res);
      if (!isEmpty(res)) {
        setGroupId(res[0]?.groupId);
      }
    },
  });

  return (
    <div className="mt-10 card-box">
      <SearchInput
        handleChange={handleChange}
        value={word}
        label="Search for Synonyms:"
        handleSearchAction={getData}
        buttonText="Search"
      />
      <Loading loading={loading} />
      {word && synonyms?.length ? (
        <>
          <Link className="btn" to={`${ROUTES_URL.ADD}?word=${word}`}>
            Add Synonyms
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
  );
};

export default SearchPage;
