const express = require('express');
const app = express();
const knex = require('knex');
const knexConfig = require('./knexfile');

// Initialize Knex with the development configuration
const db = knex(knexConfig.development);

// You can now use 'db' to interact with your SQLite database

// Example: Create a table and insert data
db.schema
  .createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username');
    table.string('email');
  })
  .then(() => {
    return db('users').insert([
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
    ]);
  })
  .then(() => {
    console.log('Table created and data inserted.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Your Express routes and other middleware go here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});