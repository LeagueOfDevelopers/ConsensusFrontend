import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'utils/config';
import { fetchUser } from './actions';

export function* user() {
  while (true) {
    try {
      const action = yield take(fetchUser.types.start);
      const data = yield call(sendLogin, action.payload);
      yield put(fetchUser.success(data));
    } catch (e) {
      yield put(fetchUser.failed(e));
    }
  }
}

function sendLogin(credentials) {
  return axios
    .get(`${config.API_ADDRESS}/users/user`, { params: { id: credentials } })
    .then(res => res.data);
}

export default [user];
