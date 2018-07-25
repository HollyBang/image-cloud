import { SIGNUP_REQUEST } from '../constants/constants';

const signup = (formData) => {
    return {
        type: SIGNUP_REQUEST,
        payload: formData
    }
};

export default signup;