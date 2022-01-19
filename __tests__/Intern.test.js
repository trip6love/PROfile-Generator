// INTERN CONSTRUCT //
const Intern = require('../lib/__mocks__/Intern');

// CREATE INTERN OBJECT // 
test('create Intern object', () => {
    const intern = new Intern('Lane', 90, 'lanebyers13@gmail.com', 'UNC');
    expect(intern.school) .toEqual(expect.any(String));
});

// GET ROLE //
test('get employee role', () => {
    const intern = new Intern('Lane', 90, 'lanebyers13@gmail.com', 'UNC');
    expect(intern.getRole()).toEqual("Intern");
}); 

// GET SCHOOL //
test('get employee school', () => {
    const intern = new Intern('Lane', 90, 'lanebyers13@gmail.com', 'UNC');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});