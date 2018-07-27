import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../constants/constants';
import API from '../api/api';

export function* createRequest(action) {
    try {
        yield call(API.post, 'account/signup', action.payload);
        yield put({type: SIGNUP_SUCCESS, payload: true});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchSignupRequest() {
    yield takeEvery(SIGNUP_REQUEST, createRequest);
}