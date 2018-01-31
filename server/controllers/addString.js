const insert = require('../database/insertString');

const addString = (req, res) => {
  insert(req.body.string)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
};

module.exports = addString;
