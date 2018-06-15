import API from '../api/api';

export default function signup(data) {
    return async function (dispatch) {
        API.post('account/signup', data);
    };
}