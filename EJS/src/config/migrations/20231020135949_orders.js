/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('orders', table => {
        table.increments('id').primary();
        table.integer('meal_id');
        table.string('username');
        table.timestamps(true, true);

    }).then(() => {
        console.log(' "orders" table created');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('orders');

};
