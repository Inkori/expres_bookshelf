// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'Khocholava',
      user:     'postgres',
      password: 'asderty'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'product'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'Khocholava',
      user:     'postgres',
      password: 'asderty'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'product'
    }
  }

};
