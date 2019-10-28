// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connecton = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql = createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQLKEYS,
    database: "burgers_db"
  });
}
require("dotenv").config();
var keys = require("../keys");
var connection = mysql.createConnection(keys);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
