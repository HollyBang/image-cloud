const initialState = {
  isFetching: null,
  lastFileName: 'default-image.jpg'
}


 const imgUpload = (state = initialState, action) => {
  switch(action.type) {
    case 'POST_REQUEST': 
      return { ...state, isFetching: true };
    case 'POST_SUCCESS': 
      return { ...state, isFetching: false, lastFileName: action.payload };
    case 'POST_FAILURE': 
      return { ...state, isFetching: false };
    default: 
      return state;
  }
};

export default imgUpload;