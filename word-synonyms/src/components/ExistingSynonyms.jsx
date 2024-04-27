import { useState } from "react";
import { ToastManager } from "../components/common/ToastManager";
import { Loading } from "./common/Loading";
import { deleteApiCall } from "../helpers/ApiCall";
import PropTypes from "prop-types";

const ExistingSynonyms = ({ word, synonyms, groupId, searchWord }) => {
  const [isLoading, setIsLoading] = useState(false);

  //API Calls
  const deleteWord = (word) => {
    setIsLoading(true);
    deleteApiCall(`http://localhost:3000/words/${groupId}/${word}`)
      .then(() => {
        ToastManager({
          text: "Synonym was removed with success",
          type: "success",
        });
        searchWord();
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

  return (
    <div>
      <Loading loading={isLoading} />
      <div>Synonyms for &quot;{word}&quot;</div>
      {synonyms.map((item, index) => (
        <div
          key={index}
          className="inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-xl p-1.5"
        >
          <div className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-black ">
            {index + 1}. {item.value}{" "}
          </div>

          <span
            onClick={() => deleteWord(item.value)}
            className="material-symbols-outlined inline-flex items-center py-0.5 px-1.5 ms-2
              rounded-full text-xs font-medium bg-red-500 text-white cursor-pointer"
          >
            delete
          </span>
        </div>
      ))}
    </div>
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
