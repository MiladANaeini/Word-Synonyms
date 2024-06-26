import { useState } from "react";
import { ToastManager } from "./shared/ToastManager";
import { Loading } from "./shared/Loading";
import { deleteApiCall } from "../common/helpers/ApiCall";
import PropTypes from "prop-types";
import { SEARCH_WORD_URL } from "../common/constants/ApiUrls";
import { TOAST_ERROR, TOAST_SUCCESS } from "../common/constants/Constants";

const ExistingSynonyms = ({ word, synonyms, groupId, searchWord }) => {
  const [isLoading, setIsLoading] = useState(false);

  //API Calls
  const deleteWord = (word) => {
    setIsLoading(true);
    deleteApiCall(`${SEARCH_WORD_URL}/${groupId}/${word}`)
      .then(() => {
        ToastManager({
          text: "Synonym was removed with success",
          type: TOAST_SUCCESS,
        });
        searchWord();
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

  return (
    <section className="w-full">
      <h3 className="w-full text-left mb-2">
        Synonyms for <span className="text-orange-600">{word}</span>:
      </h3>
      <ul className="flex justify-between flex-col gap-1">
        {synonyms.map((item, index) => (
          <li
            key={item.value}
            className="w-full flex justify-between items-center rounded-md text-sm leading-10 px-4 bg-slate-100"
          >
            <p>
              {index + 1}. {item.value}
            </p>
            <button
              onClick={() => deleteWord(item.value)}
              className="material-symbols-outlined text-red-400 text-md hover:text-red-700 duration-300"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <Loading loading={isLoading} className="mt-5" />
    </section>
  );
};

ExistingSynonyms.propTypes = {
  word: PropTypes.string.isRequired,
  synonyms: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      groupId: PropTypes.string,
    })
  ).isRequired,
  groupId: PropTypes.string,
  searchWord: PropTypes.func.isRequired,
};

ExistingSynonyms.defaultProps = {
  groupId: null,
};

export default ExistingSynonyms;
