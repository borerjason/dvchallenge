const selectStrings = require('../database/selectStrings');

const getStrings = (req, res) => {
  // console.log(req.body);
  selectStrings()
    .then((response) => {
      console.log('RESPONSE', response);
      res.status(200).send(response);
    });
};

module.exports = getStrings;
