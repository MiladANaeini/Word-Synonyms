import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ExistingSynonyms from "../components/ExistingSynonyms";
import { isEmpty } from "../common/helpers/IsEmpty";
import {
  SEARCH_WORD_URL,
  ADD_NEW_WORD_OR_SYNONYM_URL,
} from "../common/constants/ApiUrls";
import { ToastManager } from "../components/shared/ToastManager";
import SearchInput from "../components/shared/SearchInput";
import { Loading } from "../components/shared/Loading";
import useFetchData from "../common/hooks/useFetchData";
import { postApiCall, putApiCall } from "../common/helpers/ApiCall";
import { ROUTES_URL } from "../common/constants/RoutesUrl";
import { useNavigate } from "react-router-dom";
import { TOAST_ERROR, TOAST_SUCCESS } from "../common/constants/Constants";

const AddPage = () => {
  const navigate = useNavigate();
  const [newWord, setNewWord] = useState("");
  const [synonyms, setSynonyms] = useState(null);
  const [groupId, setGroupId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const word = urlParams.get("word") || "";
  if (!word) {
    navigate(ROUTES_URL.SEARCH);
  }

  // Calling Get Data
  const { loading, getData } = useFetchData({
    url: `${SEARCH_WORD_URL}/${word.trim()}`,
    enable: true,
    callBack: (response) => {
      setIsLoading(loading);
      setSynonyms(response);
      if (!isEmpty(response)) {
        setGroupId(response[0]?.groupId);
      } else {
        setGroupId(null);
      }
    },
  });

  const handleChange = (e) => {
    setNewWord(e.target.value.trim());
    setIsValid(e.target.validity.valid);
  };

  // Calling create api
  const createList = () => {
    setIsLoading(true);
    const payload = {
      word: word,
      synonym: newWord,
    };
    postApiCall(`${ADD_NEW_WORD_OR_SYNONYM_URL}`, payload)
      .then((res) => {
        ToastManager({
          text: "The Word and it's Synonym were added with success",
          type: TOAST_SUCCESS,
        });
        setGroupId(res.data.groupId);
        setSynonyms(res.data.newSynonym);
        setNewWord("");
      })
      .catch((error) => {
        ToastManager({
          text: error.response?.data.error,
          type: TOAST_ERROR,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Calling update api
  const updateList = async () => {
    setIsLoading(true);
    putApiCall(`${ADD_NEW_WORD_OR_SYNONYM_URL}/${groupId}`, {
      synonym: newWord,
    })
      .then(() => {
        getData();
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
      })
      .finally(() => {
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

  return (
    <div className="mt-10 card-box">
      <SearchInput
        isValid={isValid}
        handleChange={handleChange}
        value={newWord}
        label={`Add Synonyms to ${word}`}
        handleSearchAction={handleSubmit}
        buttonText={"Add To List"}
      />
      <Link className="btn" to={ROUTES_URL.SEARCH}>
        Back
      </Link>
      <Loading loading={isLoading} />
      {synonyms && (
        <ExistingSynonyms
          word={word}
          synonyms={synonyms}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          searchWord={getData}
          groupId={groupId}
        />
      )}
    </div>
  );
};

export default AddPage;
