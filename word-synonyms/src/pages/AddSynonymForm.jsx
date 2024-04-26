import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ExistingSynonyms from "../components/ExistingSynonyms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../components/common/IsEmpty";
import {
  SEARCH_WORD_URL,
  ADD_NEW_WORD_OR_SYNONYM_URL,
} from "../constants/constants";
import { ToastManager } from "../components/common/ToastManager";
import SearchInput from "../components/common/SearchInput";
import { Loading } from "../components/common/Loading";
const AddPage = () => {
  const [newWord, setNewWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [groupId, setGroupId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { word } = location.state || {};

  // const path = location.pathname.split("/");
  // const groupId = path[path.length - 1];

  useEffect(() => {
    searchWord(word);
  }, [word]);

  const handleChange = (e) => {
    setNewWord(e.target.value);
  };
  const createList = async () => {
    setIsLoading(true);
    const newGroup = {
      word: word,
      synonym: newWord,
    };
    await axios
      .post(`${ADD_NEW_WORD_OR_SYNONYM_URL}`, newGroup)
      .then((res) => {
        ToastManager({
          text: "The Word and it's Synonym were added with success",
          type: "success",
        });
        searchWord(word);
        setNewWord("");
      })
      .catch((error) => {
        ToastManager({
          text: error.response?.data.error,
          type: "error",
        });
        setIsLoading(false);
      });
  };
  const searchWord = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${SEARCH_WORD_URL}/${word}`);
      console.log("res", res);
      setSynonyms(res.data);
      if (!isEmpty(res.data)) {
        setGroupId(res.data[0]?.groupId);
      } else {
        setGroupId(null);
      }
      setIsLoading(false);
    } catch (error) {
      ToastManager({
        text: error.response?.data.error,
        type: "error",
      });
      setIsLoading(false);
    }
  };
  const updateList = async () => {
    setIsLoading(true);
    console.log("omad avale api");

    await axios
      .put(`${ADD_NEW_WORD_OR_SYNONYM_URL}/${groupId}`, {
        synonym: newWord,
      })
      .then((res) => {
        searchWord();
        setIsLoading(false);
        setNewWord("");
        ToastManager({
          text: "Synonym was added with success",
          type: "success",
        });
      })
      .catch((error) => {
        ToastManager({
          text: error.response?.data.error,
          type: "error",
        });
        setIsLoading(false);
      });
  };

  const handleSubmit = () => {
    if (!groupId) {
      createList();
    } else {
      updateList();
    }
  };

  if (!location.state) {
    return navigate(`/search`, { replace: true });
  }

  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <SearchInput
          handleChange={handleChange}
          value={newWord}
          label={<>Add Synonyms to {word} </>}
          handleAction={handleSubmit}
          buttonText={"Add To List"}
        />
        <Link to={`/search`}>
          <button className="btn">Back</button>
        </Link>
        <Loading loading={isLoading} />
        {synonyms && (
          <>
            <ExistingSynonyms
              word={word}
              synonyms={synonyms}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchWord={searchWord}
              groupId={groupId}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default AddPage;
