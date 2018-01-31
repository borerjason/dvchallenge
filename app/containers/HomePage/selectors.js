import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectInputString = () => createSelector(
  selectHome,
  (homeState) => homeState.get('inputString')
);
const makePosted = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posted')
);

export {
  selectHome,
  makePosted,
  makeSelectInputString,
};
