import { useState } from "react";
import { ToastManager } from "../components/common/ToastManager";
import { Loading } from "./common/Loading";
import { deleteApiCall } from "../helpers/ApiCall";
const ExistingSynonyms = ({ word, synonyms, groupId, searchWord }) => {
  const [isLoading, setIsLoading] = useState(false);

  //API Calls
  const deleteWord = (word) => {
    setIsLoading(true);
    deleteApiCall(`http://localhost:3000/words/${groupId}/${word}`)
      .then((res) => {
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
      <div>Synonyms for "{word}"</div>
      {synonyms.map((item, index) => (
        <div className="inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-xl p-1.5">
          <div
            key={index}
            className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-black "
          >
            {index + 1}. {item.value}{" "}
          </div>

          <span
            onClick={() => deleteWord(item.value)}
            className="material-symbols-outlined inline-flex items-center py-0.5 px-1.5 ms-2
              rounded-full text-xs font-medium bg-red-500 text-white"
          >
            delete
          </span>
        </div>
      ))}
    </div>
  );
};

export default ExistingSynonyms;
