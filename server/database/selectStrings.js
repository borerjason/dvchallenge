const knex = require('../database');

const selectStrings = () => (
  knex.select('string', 'uid').from('strings')
);

module.exports = selectStrings;
