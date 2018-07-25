import { IMG_UPLOAD_SUCCESS, IMG_UPLOAD_FAILURE, IMG_UPLOAD_BEGIN } from '../constants/constants';

const initialState = {
  isFetching: null,
  lastFileName: 'default-image.jpg'
}

 const imgUpload = (state = initialState, action) => {
  switch(action.type) {
    case IMG_UPLOAD_BEGIN: 
      return { ...state, isFetching: true };
    case IMG_UPLOAD_SUCCESS: 
      return { ...state, isFetching: false, lastFileName: action.payload };
    case IMG_UPLOAD_FAILURE: 
      return { ...state, isFetching: false };
    default: 
      return state;
  }
};

export default imgUpload;