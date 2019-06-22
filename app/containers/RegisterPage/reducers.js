import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import { fetchLogin, fetchRegistration, fetchLogout } from './actions';

export default combineReducers({
  login: fetchReducerFactory(fetchLogin),
  logout: fetchReducerFactory(fetchLogout),
  registration: fetchReducerFactory(fetchRegistration),
});
