import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'utils/config';
import { push } from 'react-router-redux';
import { fetchRegistration, fetchLogin, fetchLogout } from './actions';

export function* login() {
  while (true) {
    try {
      const action = yield take(fetchLogin.types.start);
      const data = yield call(sendLogin, action.payload);
      yield call(saveLocal, data);
      yield put(fetchLogin.success(data));
      yield put(push(`/account/${data._id}`));
    } catch (e) {
      yield put(fetchLogin.failed(e));
    }
  }
}

export function* logout() {
  while (true) {
    try {
      yield take(fetchLogout.types.start);
      yield call(deleteLocal);
      yield put(fetchLogout.success());
      yield put(push(`/`));
    } catch (e) {
      yield put(fetchLogout.failed(e));
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

function deleteLocal() {
  localStorage.removeItem('name');
  localStorage.removeItem('id');
  localStorage.removeItem('nickname');
  localStorage.removeItem('email');
  localStorage.removeItem('postCount');
}

function saveLocal(data) {
  localStorage.setItem('name', data.name);
  localStorage.setItem('id', data._id);
  localStorage.setItem('nickname', data.nickname);
  localStorage.setItem('email', data.email);
  localStorage.setItem('postCount', data.postIds.length);
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
export default [login, logout, registration];
