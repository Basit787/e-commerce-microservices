import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id');
    table.string('name', 255).notNullable();
    table.integer('age', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('password', 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products').dropTable('users');
}
