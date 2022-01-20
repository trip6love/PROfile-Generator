// PAGE CREATE //
const generateHTML = require('./src/generateHTML');

// PROFILES //
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
        
    ])
}