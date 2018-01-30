const selectStrings = require('../database/selectStrings');
const prepareStrings = require('../utils/prepareStrings');

const getStrings = (req, res) => {
  selectStrings()
    .then((response) => {
      const strings = prepareStrings(response);
      res.status(200).send(strings);
    });
};

module.exports = getStrings;
