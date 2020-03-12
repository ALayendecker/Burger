var connection,
  mysql = require("mysql");
require("dotenv").config(),
  (connection = process.env.JAWSDB_URL
    ? mysql.createConnection(process.env.JAWSDB_URL)
    : mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
      })).connect(),
  (module.exports = connection);
