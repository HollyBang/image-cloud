import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../api/api';
import { GET_GALLERY, GET_GALLERY_SUCCESS } from '../constants/constants'; 

export function* createRequest(action) {
    try {
        let response = yield call(API.get, 'image/getimages');
        yield put({type: GET_GALLERY_SUCCESS, payload: response.data});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchGetGalleryRequest() {
    yield takeEvery(GET_GALLERY, createRequest);
}