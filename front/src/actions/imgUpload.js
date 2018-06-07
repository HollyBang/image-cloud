

import axios from 'axios';

export default function imgUpload(data) {
    return async function (dispatch) {

        axios.post('http://localhost:4200/image/upload', data);

    };
  }
  
  