import { SIGNUP_SUCCESS } from '../constants/constants';

const initialState = {
  signupFlag: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupFlag: payload,
      };
    default:
      return state;
  }
}