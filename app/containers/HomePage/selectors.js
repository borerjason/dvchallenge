import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInputString = () => createSelector(
  selectHome,
  (homeState) => homeState.get('inputString')
);
const makeSelectStrings = () => createSelector(
  selectHome,
  (homeState) => homeState.get('strings')
);

export {
  selectHome,
  makeSelectStrings,
  makeSelectInputString,
};
