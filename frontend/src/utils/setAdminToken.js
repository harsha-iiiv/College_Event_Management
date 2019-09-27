import axios from 'axios';

const setAdminToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auto-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auto-token'];
  }
};

export default setAdminToken;
