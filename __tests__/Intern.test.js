const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

test('creates a intern', () => {
    const employee = new Employee('Intern', 1, "email@email.com");
    expect(employee.name).toBe('Intern');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    const intern = new Intern('Intern', 1, "email@email.com", 'schoolname');
    expect(intern.school).toBe('schoolname');
});

test("gets intern's name", () => {
    const intern = new Employee('Dave', 1, "email@email.com");
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("gets intern's id", () => {
    const intern = new Employee('Dave', 1, "email@email.com");
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email", () => {
    const intern = new Employee('Dave', 1, "email@email.com");
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets intern's school name", () => {
    const intern = new Intern('Dave', 1, "email@email.com", "schoolname");
    expect(intern.getSchool()).toBe('schoolname');
});

test("gets intern's role", () => {
    const intern = new Intern('Dave', 1, "email@email.com", "schoolname");
    expect(intern.getRole()).toBe('Intern');
});