const Pool = require('pg').Pool;

//TODO: Change this to use env file for security
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.WINDOWS_HOST, // Change to your PostgreSQL server host
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

module.exports = pool;
