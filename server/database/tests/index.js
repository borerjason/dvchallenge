const insertString = require('../insertString');

describe('controllers', () => {
  it('should return an empty array when insert string to DB', () => {
    const str = 'myString';
    let actual;
    insertString(str)
      .then((res) => {
        actual = res;
      });
    const expected = 0;
    expected(actual.length).toEqual(expected);
  });
});
