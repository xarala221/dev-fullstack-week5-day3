const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  hot: 'localhost',
  database: 'test_with_sql',
  password: 'abc123!',
  port: 5432,
})

module.exports = { pool }
