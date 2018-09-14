import signin from '../actions/signin';
import imgUpload from '../actions/imgUpload';

import { SIGNIN_REQUEST } from '../constants/constants';
import { IMG_UPLOAD_REQUEST } from '../constants/constants';

describe('actions', () => {
  it('should create signin action', () => {
    const payload = {email: "test@test.com", password: "testpsw"};
    const expectedAction = {
      type: SIGNIN_REQUEST,
      payload
    }
    expect(signin(payload)).toEqual(expectedAction);
  });

  it('should create img upload action', () => {
    const formData = new FormData();
    const payload = {formData, fileName: "img-name.jpg"};

    const expectedAction = {
        type: IMG_UPLOAD_REQUEST,
        payload
    }
    expect(imgUpload(payload)).toEqual(expectedAction);
  })
})