//write connection to our database. 

const mysql = require('mysql');
const util = require('util')

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

database.query = util.promisify(database.query);
module.exports = database