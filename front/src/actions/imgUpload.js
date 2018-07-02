const imgUpload = (data) => {
    console.log('data ACTION ----->' ,data);
    return {
        type: 'POST_REQUEST',
        payload: data
    }
};

export default imgUpload;

