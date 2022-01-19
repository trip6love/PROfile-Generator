// EMNPLOYEE CONST //
const Employee = require('../lib/__mocks__/Employee');

// CREATING EMPLOYEE OBJECT //
test('creates employee object', () => {
    const employee = new Employee('Lane', 90, 'lanebyers13@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
//GET ID //
test('gets ID', () => {
    const employee = new Employee('Lane', 90, 'lanebyers13@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
//GET NAME //
test('gets name', () => {
    const employee = new Employee('Lane', 90, 'lanebyers13@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// GET EMAIL //
test('gets email', () => {
    const employee = new Employee('Lane', 90, 'lanebyers13@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// GET ROLE //
test('gets employee', () => {
    const employee = new Employee('Lane', 90, 'lanebyers13@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 