// MANAGER CONSTRUCT //
const Manager = require('../lib/__mocks__/Manager');

// CREATE MANAGER OBJ // 
test('create Manager object', () => {
    const manager = new Manager('Lane', 90, 'lanebyers13@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employyee role', () => {
    const manager = new Manager('Lane', 90, 'lanebyers13@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 