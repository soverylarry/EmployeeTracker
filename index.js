const connection = require('./database/queries.js')
//Const's will reside here




const inquirer = require('inquirer');
const questions = [{
    type: 'list',
    name: 'firstchoice',
    message: 'what is the first function',
    choices: [{ name: 'view all employees', value: 'view_employees' }]
}
]


//database connection



// app.use 

// app.get('/', function (req,res){
//     return this.connection.query('select *')
//     //res.send('Employee Tracker Home page')
// })

// app.get('/user', function (req,res){
//     res.send('Employee Tracker User page')
// })

// app.post('/', function (req, res){
//     res.send('got a POST request')
// })

// app.put('/user', function (req,res){
//     res.send('got a PUT requst at /user')
// })

// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            switch (answers) {
                case 'view_employees':
                    return viewEmployees()
            }
        })
}

async function viewEmployees() {

    const employees = await database
}



// app.listen('8080', () => {
//     console.log('server has started on port 8080')
// })



//this will be the looooonnnggg file.  all of my Inquirer questions..
// Init function
//branching and Switch functions, tree out all the different branches.

// big Switch case in the middle