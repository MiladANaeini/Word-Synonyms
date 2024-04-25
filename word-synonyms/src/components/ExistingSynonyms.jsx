import React from "react";

const ExistingSynonyms = ({ word, synonyms }) => {
  return (
    <div>
      <div>Synonyms for "{word}"</div>
      {synonyms.map((item, index) => (
        <div className="info-box" key={index}>
          <p className="cta-text">
            {index + 1}. {item.value}
          </p>
          <h4 className="text-red-300 cursor-pointer">Delete</h4>
        </div>
      ))}
    </div>
  );
};

export default ExistingSynonyms;
