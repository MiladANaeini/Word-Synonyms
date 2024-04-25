import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ExistingSynonyms from "../components/ExistingSynonyms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../components/common/IsEmpty";
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
      .post("http://localhost:3000/add", newGroup)
      .then((res) => {
        console.log("res.data.groupId", res.data.groupId);
        searchWord(word);
        setNewWord("");
      })
      .catch((error) => {
        console.error(error.response.data.error);
        setIsLoading(false);
      });
  };
  const searchWord = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/words/${word}`);
      console.log("res", res);
      setSynonyms(res.data);
      if (!isEmpty(res.data)) {
        setGroupId(res.data[0]?.groupId);
      } else {
        setGroupId(null);
      }
      setIsLoading(false);
    } catch (error) {
      // console.log(error.response.data.error);
      setIsLoading(false);
    }
  };
  const updateList = async () => {
    setIsLoading(true);
    await axios
      .put(`http://localhost:3000/add/${groupId}`, {
        synonym: newWord,
      })
      .then((res) => {
        searchWord();
        setIsLoading(false);
        setNewWord("");
      })
      .catch((error) => {
        // console.log(error.response.data.error);
        setIsLoading(false);
      });
  };

  const handleSubmit = () => {
    console.log("groupId", groupId);
    if (!groupId) {
      createList();
    } else {
      updateList();
    }
  };

  if (!location.state) {
    console.log("location.state", location.state);
    return navigate(`/search`, { replace: true });
  }

  return (
    <section className="relative flex justify-center items-center mt-10">
      <div className="flex-1 min-w-[50%] max-w-[80%] flex flex-col">
        <label className="text-black-500 font-semibold">
          Add Synonyms to {word}
          <input
            type="text"
            name="word"
            className="input"
            placeholder="Please Enter The Word"
            required
            onChange={handleChange}
            value={newWord}
          />
        </label>
        <button className="btn" onClick={handleSubmit}>
          Add To List
        </button>
        <Link to={`/search`}>
          <button className="btn">Back</button>
        </Link>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};

export default AddPage;
