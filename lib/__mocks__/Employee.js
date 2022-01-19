// EMPLOYEE CONSTRUCT //
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // RETURN NAME INPUT //
    getName () {
        return this.name;
    }

    // RETURN ID FROM INPUT //
    getId () {
        return this.id;
    }   

    // RETURN EMAIL FROM INPUT
    getEmail () {
        return this.email;
    }

    
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee;