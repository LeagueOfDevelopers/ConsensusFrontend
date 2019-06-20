import { FetchAction } from 'utils/api';

export const fetchRegistration = new FetchAction('FETCH_USER_REGISTRATION');

export const fetchLogin = new FetchAction('LOGIN');

export const fetchLogout = new FetchAction('LOGOUT');

export const fetchUser = new FetchAction('FETCH_USER');
