import React from 'react';
import PostsDisplay from '../components/PostsDisplay'

import axios from 'axios';

const FormComp = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    let data = {
      'username': username,
      'password': password
    }
    console.log(data);


    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    }

    const axios = require('axios')

    axios.post('http://localhost:4000/users/authenticate',
      data,
      config,
    )
      .then(function (response) {
        const id = response.data.id;
        const token = response.data.jwtToken;

        props.setUserDetails({ userId: id, jwtToken: token });
      })
      .catch(
        // err => props.setError(err)
        err => console.error(err.response)
      );

  }
  return (
    <form onSubmit={handleSubmit}>
      <center>
        <label>
          Username
          <br />
          <input
            type="text"
            name="username"
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
        <input type="submit" value="Submit" />
      </center>
    </form>
  );
};

export default FormComp;