import axios from 'axios';
import { GET_GALLERY } from '../constants/constants'; 

export default function getGallery(data) {
    return async function (dispatch) {

        axios.get('http://localhost:4200/getimages').then((response) => {
            console.log(response);
           
            return dispatch({
                type: GET_GALLERY,
                data: response.data,
              });
            
        });
    };
  }
  