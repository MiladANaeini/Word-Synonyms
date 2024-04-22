import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AddSynonymForm = ({ word }) => {
  const [newGroupId, setNewGroupId] = useState();

  const idGenerator = () => {
    setNewGroupId(Date.now());
  };

  useEffect(() => {
    idGenerator();
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center mt-10">
      <div className="font-bold">No Synonyms Found</div>
      <NavLink
        to={`/add/${newGroupId}`}
        className="font-bold mt-2 hover:text-teal-600"
      >
        Click here if you Like to add synonyms to this word?
      </NavLink>
    </section>
  );
};

export default AddSynonymForm;
