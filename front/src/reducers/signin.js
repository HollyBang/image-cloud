import {
    SIGNIN_SUCCESS
} from '../constants/constants';

//mb email or name?
const initialState = {
    signinFlag: false
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signinFlag: payload
            }
        default:
            return state
    }
}