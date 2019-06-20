import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'utils/config';
import { push } from 'react-router-redux';
import { fetchRegistration, fetchLogin } from './actions';

export function* login() {
  while (true) {
    try {
      const action = yield take(fetchLogin.types.start);
      const data = yield call(sendLogin, action.payload);
      // yield call(saveLocal, data);
      yield put(fetchLogin.success(data));
      yield put(push(`/account/${data._id}`));
    } catch (e) {
      yield put(fetchLogin.failed(e));
    }
  }
}

export function* registration() {
  while (true) {
    try {
      const action = yield take(fetchRegistration.types.start);
      const id = yield call(sendRegistrationData, action.payload);
      yield put(fetchRegistration.success(id));
    } catch (e) {
      yield put(fetchRegistration.failed(e));
    }
  }
}

function sendLogin(credentials) {
  return axios
    .get(`${config.API_ADDRESS}/users/login`, { params: credentials })
    .then(res => res.data);
}

function sendRegistrationData(data) {
  return axios
    .post(`${config.API_ADDRESS}/users/register`, data)
    .then(res => res.data);
}

// // All sagas to be loaded
export default [login, registration];
