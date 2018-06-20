import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getGallery from './getGallery';
import imgUpload from './imgUpload';


const rootReducer = combineReducers({
    getGallery,
    imgUpload,
    form: formReducer
});

export default rootReducer;