import React from "react";

const ExistingSynonyms = ({ synonyms, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {synonyms.map((item, key) => (
            <div className="info-box" key={key}>
              <p className="cta-text">
                {key + 1}. {item.value}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ExistingSynonyms;
