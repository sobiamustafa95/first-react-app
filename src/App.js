import React from 'react';

const App = () => {

  const firstName = 'Sobia';
  const lastName = 'Mustafa';
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  
  console.log(` my Name is ${firstName + " " + lastName}`);

  return(
    <>
    <h1> My name is {` ${firstName} ${lastName}`} </h1>
    <p> Today date is {`${currentDate}`} </p>
    <p> Current time is {`${currentTime}`} </p>
    </>
  );
};

export default App;