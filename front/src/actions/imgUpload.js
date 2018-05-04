

import axios from 'axios';

export default function imgUpload(data) {
    return async function (dispatch) {

        axios.post('http://localhost:4200/upload', data).then((response) => {
            console.log(response);
        });

    };
  }
  
  