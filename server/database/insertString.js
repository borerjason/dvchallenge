const knex = require('../database');

const insert = (string) => (
  knex('strings').insert({ string })
);

module.exports = insert;
