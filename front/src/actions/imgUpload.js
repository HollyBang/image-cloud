

import API from '../api/api';

export default function imgUpload(data) {
    return async function (dispatch) {

        API.post('image/upload', data);

    };
  }
  
  