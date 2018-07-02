import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../api/api';

export function* createRequest(action) {
    try {
        yield call(API.post, 'image/upload', action.payload.formData);
        yield put({type: 'POST_SUCCESS', payload: action.payload.fileName});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchUploadRequest() {
    yield takeEvery('POST_REQUEST', createRequest);
}