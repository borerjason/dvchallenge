const insertString = require('../insertString');

describe('controllers', () => {
  it('should return a promise when insert string to DB', () => {
    const str = 'myString';
    const actual = typeof insertString(str);
    const expected = 'Promise';

    expected(actual).toEqual(expected);
  });
});
