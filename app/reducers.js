/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';
import { combineReducers } from 'redux-immutable';
import globalReducer from 'containers/App/reducer';
import { reducer as formReducer } from 'redux-form';
import authProviderReducer from 'containers/AuthProvider/reducer';
import debateProviderReducer from 'containers/DebateProvider/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    form: formReducer,
    auth: authProviderReducer,
    createDebate: debateProviderReducer,
    ...injectedReducers,
  });
  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
