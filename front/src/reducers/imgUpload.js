
 const imgUpload = (state = {isFetching: false}, action) => {
  switch(action.type) {
    case 'POST_REQUEST': 
      return { ...state, isFetching: true };
    case 'POST_SUCCESS': 
      return { ...state, isFetching: false };
    case 'POST_FAILURE': 
      return { ...state, isFetching: false };
    default: 
      return state;
  }
};

export default imgUpload;