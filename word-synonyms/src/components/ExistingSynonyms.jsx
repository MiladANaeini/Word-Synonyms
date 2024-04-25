import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ExistingSynonyms = ({
  word,
  synonyms,
  setIsLoading,
  groupId,
  searchWord,
}) => {
  const notifyError = (text) => toast(text);
  const notifySuc = (text) => toast("suc");
  //API Calls
  const deleteWord = async (word) => {
    setIsLoading(true);
    await axios
      .delete(`http://localhost:3000/words/${groupId}/${word}`)
      .then((res) => {
        setIsLoading(false);
        searchWord();
        notifySuc("it was deleeted");
      })
      .catch((error) => {
        notifyError(error.response?.data.error);
        console.log("error", error.response?.data.error);

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
      <button onClick={() => notifyError("error")}>Notify!</button>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ExistingSynonyms;
