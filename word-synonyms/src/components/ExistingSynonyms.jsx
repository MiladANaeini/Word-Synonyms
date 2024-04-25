import React from "react";
import axios from "axios";
import { ToastManager } from "../components/common/ToastManager";

const ExistingSynonyms = ({
  word,
  synonyms,
  setIsLoading,
  groupId,
  searchWord,
}) => {
  //API Calls
  const deleteWord = async (word) => {
    setIsLoading(true);
    await axios
      .delete(`http://localhost:3000/words/${groupId}/${word}`)
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
