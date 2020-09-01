//queries will be here mysql function

const database = require('./app.js')
class connection {
    //all functions and queries
    constructor(database) {
        this.database = database
    }

    get employees() {
        return this.database.query(
            ("SELECT * FROM employee.employee")
        )
    }

    get departments() {
        return this.database.query(
            ("SELECT * FROM employee.department")
        )
    }

    get roles() {
        return this.database.query(
            ("SELECT * FROM employee.role")
        )
    }

    addRoles(newRole) {
        return this.database.query("INSERT INTO role set ?", newRole)
    }

    addEmployees(newEmployee) {
        return this.database.query("INSERT INTO employee set ?", newEmployee)
    }

    addDepartments(newDepartments) {
        return this.database.query("INSERT INTO department set ?", newDepartments)
    }

    updateRoles(rolesUpdated){
        return this.database.query("UPDATE role set salary = ? WHERE id = ?", rolesUpdated)
    }
}

module.exports = new connection(database)