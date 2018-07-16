import { IMG_UPLOAD_REQUEST } from '../constants/constants';

const imgUpload = (data) => {
    console.log('data ACTION ----->' ,data);
    return {
        type: IMG_UPLOAD_REQUEST,
        payload: data
    }
};

export default imgUpload;

