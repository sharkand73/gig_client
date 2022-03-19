import React from 'react';

const Error = ({ entity }) => {

  return (
    <div className="error">
      <h1>Error: could not find the requested {entity}.</h1>      
    </div>
  )
}

export default Error;
