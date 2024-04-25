import React, { useState } from "react";
import axios from "axios";

const ExistingSynonyms = ({
  word,
  synonyms,
  setIsLoading,
  groupId,
  searchWord,
}) => {
  const deleteWord = async (word) => {
    setIsLoading(true);
    await axios
      .delete(`http://localhost:3000/words/${groupId}/${word}`)
      .then((res) => {
        setIsLoading(false);
        console.log("1");
        searchWord();
      })
      .catch((error) => {
        console.log(error);
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
