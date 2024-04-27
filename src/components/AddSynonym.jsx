import { Link } from "react-router-dom";
import { isEmpty } from "../helpers/IsEmpty";
import PropTypes from "prop-types";
import { ROUTES_URL } from "../constants/routes_url";

const AddSynonymForm = ({ word, synonyms }) => {
  if (!isEmpty(synonyms)) return null;

  return (
    <section className="flex items-center justify-center flex-col gap-2">
      <h3>No Synonyms Found</h3>
      <Link
        to={`${ROUTES_URL.ADD}?word=${word}`}
        className="hover:text-blue-800 text-blue-600"
      >
        Click here if you Like to add synonyms to this word?
      </Link>
    </section>
  );
};
AddSynonymForm.propTypes = {
  word: PropTypes.string,
  synonyms: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      groupId: PropTypes.string,
    })
  ),
};

AddSynonymForm.defaultProps = {
  word: "",
  synonyms: [],
};
export default AddSynonymForm;
