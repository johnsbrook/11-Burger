//Setting up MySQL Connection
var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ivan0825",
    database: "burger_db"
});

// Make the connection
connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

// Exporting connection for ORM use
module.exports = connection;