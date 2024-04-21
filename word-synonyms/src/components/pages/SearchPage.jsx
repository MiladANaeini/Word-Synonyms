import React, { useState } from "react";
import data from "../common/data.json";

const SearchPage = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const searchWord = ()=>{
    const synonym = data.words.find((element)=> element.value.toLowerCase() === word.toLowerCase())
    if(!synonym){
      console.log("Word does not exist")
    } 
    setSynonyms(data.words.filter((element)=> element.groupId === synonym.groupId))
    console.log("synonyms",synonyms)
  }
  return (
    <section className='relative flex justify-center items-center mt-10'>
      <div className='flex-1 min-w-[50%] max-w-[80%] flex flex-col'>
        <label className="text-black-500 font-semibold">
          Search for Synonyms:
          <input
            type="text"
            name="word"
            className="input"
            placeholder="Please Enter The Word"
            required
            onChange={(e)=>{console.log("e",e.target.value)
            setWord(e.target.value)
          }}
            value={word}
          />
        <button onClick={searchWord} className="btn"> 
          Search
        </button>
        </label>
      </div>
    </section>
  );
};

export default SearchPage;
