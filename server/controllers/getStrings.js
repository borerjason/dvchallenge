const selectStrings = require('../database/selectStrings');

const getStrings = (req, res) => {
  selectStrings()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = getStrings;
