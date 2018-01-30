import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInputString = () => createSelector(
  selectHome,
  (homeState) => homeState.get('inputString')
);

export {
  selectHome,
  makeSelectInputString,
};
