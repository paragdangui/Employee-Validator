import UserInput from "./components/User/UserInput/UserInput";
import UserListing from "./components/User/UserListing/UserListing";
import React, { useState } from 'react';

// const initialValues = [
//   { id: 1, name: "Sam", age: 22 },
//   { id: 2, name: "Shawn", age: 34 }

// ];
function App() {
  // const [hasInput, setHasInput] = useState(true);
  const [userInputValues, setUserInputValues] = useState('');



  const inputValuesHandler = (data) => {
    setUserInputValues(prevState => [data, ...prevState]);
    // setHasInput(true);


  }

  return (
    <div>
      <UserInput
        onUserValues={inputValuesHandler}
      />
      {userInputValues.length ? <UserListing
        userValues={userInputValues}
      /> : ''}

    </div>

  );
}

export default App;
