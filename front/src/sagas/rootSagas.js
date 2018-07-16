import { all } from 'redux-saga/effects';

import watchUploadRequest from './watchUploadRequest.js';
import watchGetGalleryRequest from './watchGetGalleryRequest.js';
import watchSigninRequest from './watchSigninRequest.js';

export default function* rootSaga() {
    yield all([
        watchUploadRequest(),
        watchGetGalleryRequest(),
        watchSigninRequest()
    ])
}