import type { Knex } from 'knex';
import 'dotenv/config';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgres',
    connection: {
      database: process.env.POSTGRES_DB! as string,
      user: process.env.POSTGRES_USER! as string,
      password: process.env.POSTGRES_PASS! as string,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB! as string,
      user: process.env.POSTGRES_USER! as string,
      password: process.env.POSTGRES_PASS! as string,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: './migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB! as string,
      user: process.env.POSTGRES_USER! as string,
      password: process.env.POSTGRES_PASS! as string,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: './migrations',
    },
  },
};

module.exports = config;
