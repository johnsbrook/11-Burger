//Setting up MySQL Connection
var mysql = require('mysql');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_KEY,
        database: 'burger_db'
    });
};

// Make the connection
connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

// Exporting connection for ORM use
module.exports = connection;