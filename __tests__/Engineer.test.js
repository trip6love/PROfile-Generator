// ENGINERR CONSTRUCT //
const Engineer = require('../lib/__mocks__/Engineer');

// CREATE ENGINEER OBJECT //
test('create Engineer object', () => {
    const engineer = new Engineer('Lane', 90, 'lanebyers13@gmail.com', 'trip6love');
    expect(engineer.github) .toEqual(expect.any(String));
});

// GET GITHUB //
test('get github', () => {
    const engineer = new Engineer('Lane', 90, 'lanebyers13@gmail.com', 'trip6love');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// GET ROLE //
test('get role', () => {
    const engineer = new Engineer('Lane', 90, 'lanebyers13@gmail.com', 'trip6love');
    expect(engineer.getRole()).toEqual("Engineer");
});