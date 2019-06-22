import { createSelector } from 'reselect';

const selectUser = () => state => state.reducer.get('user');

export const makeUserSelector = () =>
  createSelector(
    selectUser(),
    substate => JSON.parse(JSON.stringify(substate.get('data'))),
  );
