import API from '../api/api';

export default function imgUpload(data) {

    return async function (dispatch) {
        dispatch({
            type: 'POST_REQUEST'
        });

        API.post('image/upload', data)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: 'POST_SUCCESS'
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });;

    };
}