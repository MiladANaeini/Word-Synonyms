import React from 'react'

const ExistingSynonyms = ({synonyms,isLoading}) => {
  return (
    <div>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        {synonyms.map((item, key) => (
          <div key={key}> 
            {key + 1}. {item.value}
          </div>
        ))}
      </>
    )}
  </div>
  )
}

export default ExistingSynonyms