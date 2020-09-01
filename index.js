const connection = require('./database/queries.js')
const database = require('./database/app.js')
const inquirer = require('inquirer');
const { viewEmployees, departments } = require('./database/queries.js');
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
    //console.log(employees)
    console.table(employees)
}

async function viewDepartments(err, res) {
    if (err) throw err;
    const departments = await connection.departments;
    console.table(departments)
}

async function viewRoles(err, res) {
    if (err) throw err;
    const roles = await connection.roles;
    console.table(roles)
}

async function addRoles(err, res) {
    if (err) throw err;
    const deptList = await connection.departments;
    const newRole = await inquirer.prompt([{
        name: "title",
        type: "input",
        message: "Please give the new Role a name:"
    },
    {
        name: "salary",
        type: "input",
        message: "Enter starting Salary"
    },
    {
        name: "department_id",
        type: "list",
        message: "Select a department",
        choices: deptList
    }
    ])

    console.log(newRole)
    console.log(deptList)

    for (i = 0; i < deptList.length; i++) {
        if (deptList[i].name === newRole.department_id) {
            newRole.department_id = deptList[i].id
            break;
        }
    }

    const addNewRole = await connection.addRoles(newRole);
    console.table(newRole)
}

async function addEmployees(err, res) {
    if (err) throw err;
    const empList = await connection.employees;
    const mgrIds = [];
    for (i = 0; i < empList.length; i++) {
        let id = empList[i].id
        mgrIds.push(id)
    }
    console.log(mgrIds)
    console.table(empList)
    const newlyEmployeed = await inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Enter new employees ID number",
            validate: function (val) {
                if (isNaN(val) === false) {
                    return true;
                }
                return "Please enter a valid number, hit ESC to re-enter";
            }
        },
        {
            name: "first_name",
            type: "input",
            message: "Enter new employees first name"
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter new employees last name"
        },
        {
            name: "manager_id",
            type: "list",
            message: "Select a Manager's Employee ID",
            choices: mgrIds
        }
    ])

    const addNewHire = await connection.addEmployees(newlyEmployeed);
    console.table(newlyEmployeed)
    console.log("Great job! Here is your new employee lineup!")
    console.table(await connection.employees)

}

async function addDepartments(err, res) {
    if (err) throw err;
    const newDepts = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please give the new Department a name:"
    },
    {
        name: "id",
        type: "input",
        message: "Give new dept a new ID number",
        validate: function (val) {
            if (isNaN(val) === false) {
                return true;
            }
            return "Please enter a valid number, hit ESC to re-enter";
        }
    }
    ])
    newDeptsList = await connection.addDepartments(newDepts);
    const deptList = await connection.departments;
    console.log("Here's is your NEW deparment list!")
    console.table(deptList)
}

async function updateRoles(err, res) {
    if (err) throw err;
    const roleList = await connection.roles;
    const existingRoles = [];
    for (i = 0; i < roleList.length; i++) {
        let id = roleList[i].title
        existingRoles.push(id)
    }
    const newRoleDeets = await inquirer.prompt([
        {
            name: "title",
            type: "list",
            message: "Select an Existing Role, and then input a salary to update",
            choices: existingRoles
        },
        {
            name: "salary",
            type: "input",
            message: "Input a new Salary"
        }
    ])
        .then((answer) => {
            //const salaryId = connection.updateRoles.id
            //console.log(salaryID)
            
            connection.updateRoles(
                ([answer.salary]
                ),
                function (err) {
                    if (err) throw err;
                })
            console.log("Here's your role with Updated salary!")
            newRoleList = await connection.roles()
            console.tables(newRoleList)
        });
}