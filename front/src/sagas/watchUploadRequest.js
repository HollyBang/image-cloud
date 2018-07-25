import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../api/api';

import { IMG_UPLOAD_REQUEST, IMG_UPLOAD_SUCCESS, IMG_UPLOAD_BEGIN } from '../constants/constants';

export function* createRequest(action) {
    try {
        yield put({type: IMG_UPLOAD_BEGIN});
        yield call(API.post, 'image/upload', action.payload.formData);
        yield put({type: IMG_UPLOAD_SUCCESS, payload: action.payload.fileName});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchUploadRequest() {
    yield takeEvery(IMG_UPLOAD_REQUEST, createRequest);
}