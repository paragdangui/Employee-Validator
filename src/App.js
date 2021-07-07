import UserInput from "./components/User/UserInput";
import React, { useState } from 'react';

function App() {
  const [userInputValues, setUserInputValues] = useState('');

  const inputValuesHandler = (data) => {
    setUserInputValues(data);

  }
  return (
    <UserInput
      onUserValues={inputValuesHandler}
    />
  );
}

export default App;
