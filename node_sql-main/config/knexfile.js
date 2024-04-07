// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   },
  //     seeds: {
  //     directory: './seed'
      
  //   },
  //   useNullAsDefault: true, // Required for SQLite

  // },

    // MongoDB configuration
    mongo: {
      uri: 'mongodb+srv://kojoyeboah53i:saints_salvation2@cluster0.sk4iy96.mongodb.net/shopping?retryWrites=true&w=majority', // Replace with your MongoDB URI
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: __dirname + "./config/migrations",
    },
    seeds: {
      directory: __dirname + "./config/seeds",
    },
  },


};

