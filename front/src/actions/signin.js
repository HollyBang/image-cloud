import { SIGNIN_REQUEST } from '../constants/constants';

 const signin = (formData) => {
    return {
        type: SIGNIN_REQUEST,
        payload: formData
    }
}

export default signin;