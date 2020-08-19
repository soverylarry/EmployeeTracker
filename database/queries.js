//queries will be here mysql function

const database = require('./app.js')
class connection {
    //all functions and queries
    constructor(database){
        this.database=database
    }
    findallemployees(){
        return this.database.query(
            'Select * from employee.employee'
        )
    }
}

module.exports = new connection(database)