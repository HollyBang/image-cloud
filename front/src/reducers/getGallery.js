import { GET_GALLERY_SUCCESS } from '../constants/constants';

const initialState = {
  imgGallery: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        imgGallery: payload,

      };
    default:
      return state;
  }
}
