// IMPORT EMPLOYEE CONSTRUCT //
const Employee = require('./Employee');

// INTERN EXTENDS EMPLOYEE //
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }
    // RETURN SCHOOL //
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}
module.exports = Intern; 