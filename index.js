// PAGE CREATE //
const generateHTML = require('./src/generateHTML');

// PROFILES //
const Engineer = require('./lib/__mocks__/Engineer');
const Manager = require('./lib/__mocks__/Manager');
const Intern = require('./lib/__mocks__/Intern');

// NODE //
const inquirer = require('inquirer');
const fs = require('fs');

// ARRAY //
const dbArray = [];

// MANAGER PROMPTS //
const dbManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?', 
            validate: nameEntry => {
                if (nameEntry) {
                    return true;
                } else {
                    console.log ("Please enter a name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter your email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your ID number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerAdd => {
        const {name, email, id, officeNumber} = managerAdd;
        const manager = new Manager (name, email, id, officeNumber);
        dbArray.push(manager);
    })
};

// EMPLOYEE PROMPT //
const dbEmployee = () => {
    console.log('Adding employees')

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter a school!")
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter employee's github.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter github username!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Add more employees?',
            default: false
        },
    ])
    .then(employeeInput => {
        let {name, email, id, role, school, github, confirmAdd} = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, email, id, github);

        } else if (role === "Intern") {
            employee = new Intern (name, email, id, github);

        }

        dbArray.push(employee);
        if(confirmAdd) {
            return dbEmployee(dbArray);

        } else {
            return dbArray
        }
    })

};
// WRITING HTML FILE //
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        
        if(err) {
            console.log(err);
            return;
            //IF NO ERROR //
        } else {
            console.log("Your profile has been generated in the dist folder!")
        }
    })
};

// CALLING //
dbManager()
.then(dbEmployee)
.then(dbArray => {
    return generateHTML(dbArray);
})
.then(HTML => {
    return writeFile(HTML);
})
.catch(err => {
    console.log(err);
})