import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:4200/`,
  withCredentials: true,

});

// credentials: 'include'