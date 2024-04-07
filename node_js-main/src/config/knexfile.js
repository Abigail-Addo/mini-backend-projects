module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3', // Change this to your database file path
      },
      useNullAsDefault: true, // Required for SQLite
    },
  };