const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);

// async function create_users_table() {
//     const tableExists = await db.schema.hasTable('user');

//     if (!tableExists) {

//         return db.schema.createTable('user', (table) => {
//             table.increments('id').primary();
//             table.string('name');
//             table.string('username');
//             table.timestamps(true, true);
//         }).then(() => {
//             console.log(' "user" table created');
//         });
//     }
// }

// async function create_meals_table() {
//     const tableExists = await db.schema.hasTable('meals');

//     if (!tableExists) {

//         return db.schema.createTable('meals', (table) => {
//             table.increments('id').primary();
//             table.string('name');
//             table.string('descripton');
//             table.integer('price');
//             table.string('image');
//             table.boolean('is_vegetarian').defaultTo(false);
//             table.timestamps(true, true);
//         }).then(() => {
//             console.log(' "meals" table created');
//         });
//     }
// }


// create_users_table();
// create_meals_table();


module.exports = db;