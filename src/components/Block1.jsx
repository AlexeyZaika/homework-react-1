import React from 'react';

function Block1(props) {
  const string = 'Hello my dear friend';

  const obj = {
    firstName: 'Alexey',
    lastName: 'Zaika'
  }

  function getFullName(obj) {
    return obj.firstName + ' ' + obj.lastName;
  }

  return (
    <div className="block1">
      <h1>{string}</h1>
      <p>This is the first React homework {getFullName(obj)}</p>
    </div>
  );
}

export default Block1;

