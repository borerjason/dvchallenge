const insert = require('../database/queries');

const addString = (req, res) => {
  // console.log(req.body);
  insert(req.body.string)
    .then(() => {
      res.status(200).send();
    });
};

module.exports = addString;
