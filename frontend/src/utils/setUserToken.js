import axios from 'axios';

const setUserToken = token => {
  if (token) {
    axios.defaults.headers.common['auto-token'] = token;
  } else {
    delete axios.defaults.headers.common['auto-token'];
  }
};

export default setUserToken;  
