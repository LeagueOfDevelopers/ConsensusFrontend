import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import { fetchUser } from './actions';

export default combineReducers({
  user: fetchReducerFactory(fetchUser),
});
