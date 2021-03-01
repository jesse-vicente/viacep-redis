
exports.up = function(knex) {
  return knex.schema.createTable('addresses', function(table) {
    table.increments('id');
    table.string('cep', 9).unique().notNullable();
    table.string('bairro').notNullable();
    table.string('logradouro').notNullable();
    table.string('localidade').notNullable();
    table.string('uf', 2).notNullable();
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses');
};
