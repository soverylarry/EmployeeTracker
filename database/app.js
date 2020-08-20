//write connection to our database. 

const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Marathon705!',
    database: 'Employee'
});

database.connect(function (err) {
    if (err) throw (err);    
});

module.exports = database