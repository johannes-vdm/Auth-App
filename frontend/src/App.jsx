import React, { useState } from 'react';
import './App.css';

import FormComp from './components/FormComp.jsx';
import PostsDisplay from './components/PostsDisplay.jsx';

function App() {
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = useState();

  if (userDetails) {
    return (
      <center>
        <PostsDisplay
          userDetails={userDetails}
          setError={setError}
        />
      </center>
    );
  } else {
    return (
      <>
        <center>
          <p><strong>{error}</strong></p>
          <p>Username: test</p>
          <p>Password: test</p>
          <FormComp
            setUserDetails={setUserDetails}
            setError={setError}
          />
        </center>
      </>
    );
  }
}

export default App;
