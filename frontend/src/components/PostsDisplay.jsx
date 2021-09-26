import React
, { useState }
  from "react";

import axios from "axios";

const PostsDisplay = (props) => {
  const [postData, setPostData] = React.useState();

  const jwtToken = props.userDetails.jwtToken;
  const userId = props.userDetails.userId;

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`
    }
  }

  //ANCHOR [post axios call]
  const axios = require('axios');
  axios.get(`http://localhost:4000/users/posts/${userId}`, config)
    .then(function (response) {
      console.log("GET");
      console.log(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        console.error(`Status error:${error.response.status}`);
      } else if (error.request) {
        console.error('The request was made but no response was received. Check if your server is online.');
      } else if (error.response.data.message) {
        console.error(error.response.data.message);
      } else if (error.response.data) {
        console.error('Server responded with error data. Please check console.');
        console.error(error.response.data);
      } else {
        console.error('Uncaught trigger.');
      }
    });
  return (
    <p>{postData}</p>
  );
}

export default PostsDisplay;