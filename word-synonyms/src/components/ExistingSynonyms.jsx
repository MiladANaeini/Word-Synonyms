import React from "react";

const ExistingSynonyms = ({ word, synonyms, isLoading }) => {
  return (
    <div>
      <div>Synonyms for "{word}"</div>
      {synonyms.map((item, index) => (
        <div className="info-box" key={index}>
          <p className="cta-text">
            {index + 1}. {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExistingSynonyms;
