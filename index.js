const connection = require('./database/queries.js')
//Const's will reside here

const inquirer = require('inquirer');
const { viewEmployees } = require('./database/queries.js');
const questions = [{
    type: 'list',
    name: 'firstchoice',
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

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            switch (answers) {
                case 'view_employees':
                    return viewEmployees()
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
init();



async function viewAllEmployees(err, result) {
    const employees = await database.getEmployees;
    console.table(employees)
}



