const knex = require('../database');

const insert = (string) => {
  console.log('triggered');
  return knex('strings').insert({ string });
};

module.exports = insert;
