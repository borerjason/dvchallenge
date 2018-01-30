const knex = require('../database');

const selectStrings = () => (
  knex.select('string').from('strings')
);

module.exports = selectStrings;
