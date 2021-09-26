import React
, { useState }
  from 'react';

import PostsDisplay from '../components/PostsDisplay'
import axios from 'axios';

const FormComp = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const data = {
      'username': username,
      'password': password
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    }

    //ANCHOR [core axios call]
    const axios = require('axios');
    axios.post('http://localhost:4000/users/authenticate',
      data,
      config,
    )
      .then(function (response) {
        console.log({ response });

        const id = response.data.id;
        const token = response.data.jwtToken;
        props.setUserDetails({ userId: id, jwtToken: token });

      })
      .catch(function (error) {
        if (error.response) {
          props.setError(`Status error:${error.response.status}`);
          if (error.response.data.message) {
            props.setError(error.response.data.message);
          }
        } else if (error.request) {
          // TODO [create loader here]
          props.setError('The request was made but no response was received. Check if your server is online.');
        } else if (error.response.data.message) {
          props.setError(error.response.data.message);
        } else if (error.response.data) {
          props.setError('Server responded with error data. Please check console.');
          console.error(error.response.data);
        } else {
          props.setError('Uncaught trigger.');
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <br />
        <input
          type="text"
          name="username"
          required
        />

      </label>
      <br />
      <label>
        Password
        <br />
        <input
          type="password"
          name="password"
        />
      </label>
      <br />
      <input
        type="submit"
        value="Sign In"
        required
      />
    </form>
  );
}


export default FormComp;