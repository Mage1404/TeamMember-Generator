const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('creates a Engineer', () => {
    const employee = new Employee('Engineer1', 1, "email@email.com");
    expect(employee.name).toBe('Engineer1');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    const engineer = new Engineer('Engineer1', 1, "email@email.com", 'githubname');
    expect(engineer.github).toBe('githubname');
});

test("gets Engineer's name", () => {
    const engineer = new Employee('Dave', 1, "email@email.com");
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("gets Engineer's id", () => {
    const engineer = new Employee('Dave', 1, "email@email.com");
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets Engineer's email", () => {
    const engineer = new Employee('Dave', 1, "email@email.com");
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('Engineer1', 1, "email@email.com", 'githubname');
    expect(engineer.getGithub()).toBe('githubname');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Engineer1', 1, "email@email.com", 'githubname');
    expect(engineer.getRole()).toBe('Engineer');
});