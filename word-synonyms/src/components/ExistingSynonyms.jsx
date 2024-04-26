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
        <div className="info-box" key={index}>
          <p className="cta-text">
            {index + 1}. {item.value}
          </p>
          <h4
            className="text-red-300 cursor-pointer"
            onClick={() => deleteWord(item.value)}
          >
            Delete
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ExistingSynonyms;
