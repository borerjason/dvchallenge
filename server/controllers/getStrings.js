const selectStrings = require('../database/selectStrings');

const getStrings = (req, res) => {
  selectStrings()
    .then((response) => {
      res.status(200).send(response);
    });
};

module.exports = getStrings;
