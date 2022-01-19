// EMPLOYEE CONSTRUCT //
const Employee = require('./Employee');

// MANAGER EXTENDS EMPLOYEE //
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }
    getRole () {
        return "Manager";
    }
}
module.exports = Manager; 