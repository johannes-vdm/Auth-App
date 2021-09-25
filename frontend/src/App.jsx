import React, { useState } from 'react';
import './App.css';

import FormComp from './components/FormComp.jsx';
import PostsDisplay from './components/PostsDisplay.jsx';
import DisplayError from './components/DisplayError.jsx';

function App() {
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = React.useState();

  if (userDetails) {
    return (
      <>
        <PostsDisplay userDetails={userDetails} />
      </>
    )
  } else {
    console.log({ userDetails });
    return (
      <>
        <center>
          <p>Username: test</p>
          <p>Password: test</p>
        </center>
        {/* <DisplayError /> */}
        <FormComp
          setUserDetails={setUserDetails}
          setError={setError}
        />
      </>
    )
  }
}

export default App;
