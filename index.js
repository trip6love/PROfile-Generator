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
}