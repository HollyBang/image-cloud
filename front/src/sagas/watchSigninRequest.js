import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from '../constants/constants';
import API from '../api/api';

export function* createRequest(action) {
    try {
        const res = yield call(API.post, 'account/signin', action.payload);
        // const data = yield res.json();
        console.log('SIGNIN_REQUEST saga DATA ---->>>', res);
        yield put({type: SIGNIN_SUCCESS, payload: true});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchSignupRequest() {
    yield takeEvery(SIGNIN_REQUEST, createRequest);
}