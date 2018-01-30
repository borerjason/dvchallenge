const insert = require('../database/insertString');

const addString = (req, res) => {
  insert(req.body.string)
    .then(() => {
      res.status(200).send();
    });
};

module.exports = addString;
