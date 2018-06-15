import API from '../api/api';
import { GET_GALLERY } from '../constants/constants'; 

export default function getGallery() {
    return async function (dispatch) {
        API.get('image/getimages').then((response) => {
            return dispatch({
                type: GET_GALLERY,
                data: response.data,
              });
        });
    };
  }
  