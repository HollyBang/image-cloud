import { IMG_UPLOAD_REQUEST } from '../constants/constants';

const imgUpload = (data) => {
    return {
        type: IMG_UPLOAD_REQUEST,
        payload: data
    }
};

export default imgUpload;

