require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@contactsdb:5432/contacts';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }