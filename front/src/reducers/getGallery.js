import { GET_GALLERY } from '../constants/constants';

const initialState = {
  imgGallery: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_GALLERY:
      return {
        ...state,
        imgGallery: data,

      };
    default:
      return state;
  }
}
