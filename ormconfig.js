require('dotenv').config();

module.exports = {
   type: 'postgres',
   url: process.env.DB_URL,
   synchronize: false,
   logging: false,
   entities: ['src/core/data/database/entities/**/*'],
   cli: {
      entitiesDir: 'src/core/data/database/entities',
   },
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
