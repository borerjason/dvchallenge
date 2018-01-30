
exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('strings', (table) => {
      table.increments('uid').primary();
      table.string('string');
    }),
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('strings'),
  ])
);
