import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getGallery from './getGallery';
import imgUpload from './imgUpload';
import signup from './signup';
import signin from './signin';

const rootReducer = combineReducers({
    getGallery,
    imgUpload,
    form: formReducer,
    signup,
    signin
});

export default rootReducer;