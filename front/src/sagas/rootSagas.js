import { all } from 'redux-saga/effects';

import watchUploadRequest from './watchUploadRequest.js';
import watchGetGalleryRequest from './watchGetGalleryRequest.js';

export default function* rootSaga() {
    yield all([
        watchUploadRequest(),
        watchGetGalleryRequest()
    ])
}