
require('dotenv').config();

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3', // Change this to your database file path
      },
      useNullAsDefault: true, // Required for SQLite
    },
  migrations: {
  directory: './migrations',
  tableName: 'knex_match_migrations'
  }
  };
  

  // using mysql example
  // development: {
  //   client: 'mysql',
  //   connection: {
  //     host: process.env.DB_HOST,
  //     // port: 5432,
  //     database: process.env.DB_DATABASE,
  //     user: process.env.DB_USERNAME,
  //     password: process.env.DB_PASSWORD
  //     // password: ''
  //   }
  // migrations: {
  // directory: './migrations',
  // tableName: 'knex_match_migrations'
  // }


  // using postgreSQL example

  // production: {
  //   client: 'pg',
  //    connection: {
  //     host: process.env.DB_HOST,
  //     port: 5432,
  //     database: process.env.DB_DATABASE,
  //     user: process.env.DB_USERNAME,
  //     password: process.env.DB_PASSWORD
  //   },
  //   migrations: {
  //     directory: './migrations',
  //     tableName: 'knex_match_migrations'
  //   },
  // },