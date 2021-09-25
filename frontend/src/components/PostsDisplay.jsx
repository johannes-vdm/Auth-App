import React
, { useState }
  from "react";

import axios from "axios";

const PostsDisplay = (props) => {

  let [postData, setPostData] = React.useState('');

  const jwtToken = props.userDetails.jwtToken;
  const userId = props.userDetails.userId;

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`
    }
  }

  const axios = require('axios');

  axios.get(`http://localhost:4000/users/posts/${userId}`, config)
    .then(function (response) {
      console.log("GET");
      console.log(response.data);

      setPostData(response.data);
    })
    .catch(err => console.error(err.response));

  return (
    <center><p>{postData}</p></center>
  )
}

export default PostsDisplay;