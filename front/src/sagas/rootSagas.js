import { all } from 'redux-saga/effects';

import watchUploadRequest from './watchUploadRequest.js';

export default function* rootSaga() {
    yield all([
        watchUploadRequest(),
    ])
}