//queries will be here mysql function

const database = require('./app.js')
class connection {
    //all functions and queries
    constructor(database) {
        this.database = database
    }

    get employee() {
        return this.database.query(
         ("SELECT * FROM employee.employee")
        )}         
}

module.exports = new connection(database)