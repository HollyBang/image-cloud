import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getGallery from './getGallery';


const rootReducer = combineReducers({
    getGallery,
    form: formReducer
});

export default rootReducer;