import UserInput from "./components/User/UserInput/UserInput";
import UserListing from "./components/User/UserListing/UserListing";
import React, { useState } from 'react'; //fragment is imported so u can use <Fragment> instead of <React.Fragment>
// import Wrapper from './components/Helpers/Wrapper';

function App() {
  const [userInputValues, setUserInputValues] = useState('');

  const inputValuesHandler = (data) => {
    setUserInputValues(prevState => [data, ...prevState]);
  }

  return (
    <React.Fragment>
      {/* <ul style={{ color: "white" }}>
        <li>portals</li>
        <li>useState React Hook</li>
        <li>Lifing State Up</li>
        <li>components</li>
        <li>props</li>
        <li>props.children</li>
        <li>template literal</li>
      </ul> */}
      <UserInput
        onUserValues={inputValuesHandler}
      />
      {userInputValues && <UserListing
        userValues={userInputValues}
      />}

    </React.Fragment>

  );
}

export default App;
