import API from '../api/api';

export default function imgUpload(data) {
    console.log(data);
    return async function (dispatch) {
        dispatch({
            type: 'POST_REQUEST'
        });

        API.post('image/upload', data.formData)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: 'POST_SUCCESS',
                        payload: data.fileName
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });;

    };
}