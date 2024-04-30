import { Link } from "react-router-dom";
import { ROUTES_URL } from "../common/constants/RoutesUrl";

const HomePage = () => {
  return (
    <div className="mt-10 card-box">
      <h1 className="text-2xl">Welcome To The Words Synonyms Project</h1>
      <p className="text-sm font-normal leading-6">
        The Words Synonym is an app where you are able to search for synonyms of
        words.
        <br />
        In addition if the word does not exist in the database, you can add it
        in the add word page.
        <br />
        Also if you wish to add more synonyms to a group of words you can easily
        do that as well 🙂.
      </p>
      <Link to={ROUTES_URL.SEARCH} className="btn">
        Start Searching
      </Link>
    </div>
  );
};

export default HomePage;
