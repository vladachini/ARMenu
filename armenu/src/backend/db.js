const Pool = require("pg").Pool;

//TODO: Change this to use env file for security
const pool = new Pool({
    user: "postgres",
    password: "kovacina2002",
    database: "ARMenu",
    host: process.env.WINDOWS_HOST, // Change to your PostgreSQL server host
    port: 5432, // Default PostgreSQL port
  });

  module.exports = pool;