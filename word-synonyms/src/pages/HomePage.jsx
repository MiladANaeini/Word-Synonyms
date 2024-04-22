import React from "react";
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-center mt-6">
        Welcome To The Words Synonyms
      </h1>
      <p className="mt-5">
      The Words Synonym is an app where you are able to search for synonyms of words.<br/>
      In addition if the word does not exist in the database, you can add it in the add word page.<br/>
      Also if you wish to add more synonyms to a group of words you can easily do that as well🙂.
      </p>
      <div className='mt-5'>
        <Link to='/search' className="btn">
             Start Searching
        </Link>
        </div>
    </div>
  );
};

export default HomePage;
