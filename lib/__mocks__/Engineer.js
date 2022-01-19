// EMPLOYEE CONSTRUCT
const Employee = require("./Employee");

// ENGINEER EXTENDS EMPLOYEE //
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // RETURN GITHUB INPUT 
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer; 