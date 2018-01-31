const insert = require('../database/insertString');
const select = require('../database/selectStrings');
const prepareStrings = require('../utils/prepareStrings');

const addString = (req, res) => {
  insert(req.body.string)
    .then(() => {
      select()
        .then((response) => {
          // const strings = prepareStrings(response);
          res.status(200).send(response);
        });
    });
};

module.exports = addString;
