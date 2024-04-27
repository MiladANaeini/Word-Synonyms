import { Link } from "react-router-dom";
import { isEmpty } from "../helpers/IsEmpty";
import PropTypes from "prop-types";

const AddSynonymForm = ({ word, synonyms }) => {
  if (!isEmpty(synonyms)) return null;

  return (
    <section className="relative flex flex-col justify-center items-center mt-10">
      <div className="font-bold">No Synonyms Found</div>
      <Link
        to={`/add/${word}`}
        state={{ word: word }}
        className="font-bold mt-2 hover:text-teal-600"
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
  ).isRequired,
};

AddSynonymForm.defaultProps = {
  word: "",
  synonyms: [],
};
export default AddSynonymForm;
