import axios from 'axios';
import { GET_GALLERY } from '../constants/constants'; 

export default function getGallery() {
    return async function (dispatch) {

        axios.get('http://localhost:4200/getimages').then((response) => {

           
            return dispatch({
                type: GET_GALLERY,
                data: response.data,
              });
            
        });
    };
  }
  