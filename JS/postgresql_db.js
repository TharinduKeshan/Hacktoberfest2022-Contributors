// a template to establish connection between 'pg' and your hosted postgresql database

const Pool = require("pg").Pool;

const connectionString =
  "postgres://<username>:<password>@<bd_hosting_website_url>/<postgresql_database_id>";

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect();

module.exports = pool;
