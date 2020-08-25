const connection = require('./database/queries.js')
//Const's will reside here
const database = require('./database/app.js')
const inquirer = require('inquirer');
const { viewEmployees } = require('./database/queries.js');
const cTable = require('console.table')
const questions = [{
    type: 'list',
    name: 'answers',
    message: 'What would you like to do?',
    choices: [{ name: 'view all employees', value: 'view_employees' },
    { name: 'view all roles', value: 'view_roles' },
    { name: 'view all departments', value: 'view_departments' },
    { name: 'add departments', value: 'add_departments' },
    { name: 'add roles', value: 'add_roles' },
    { name: 'add employees', value: 'add_employees' },
    { name: 'update employee roles', value: 'update_roles' }
    ]
}]

init();
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            switch (answers.answers) {
                case 'view_employees':
                    return viewAllEmployees()
                case 'view_roles':
                    return viewRoles()
                case 'view_departments':
                    return viewDepartments()
                case 'add_departments':
                    return addDepartments()
                case 'add_roles':
                    return addRoles()
                case 'add_employees':
                    return addEmployees()
                case 'update_roles':
                    return updateRoles()
            }
        })
}


async function viewAllEmployees(err, res) {
    if (err) throw err;
    const employees = await connection.employees;
    console.log(employees)
    console.table(employees)
}



