const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

test('creates a intern', () => {
    const employee = new Employee('Emplyee1');
    expect(employee.name).toBe('Emplyee1');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    const intern = new Intern('schoolname');
    expect(intern.school).toBe('schoolname');
});

test("gets Engineer's name", () => {
    const intern = new Employee('Dave');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("gets Engineer's id", () => {
    const intern = new Employee('Dave');
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets Engineer's email", () => {
    const intern = new Employee('Dave');
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets Engineer's school name", () => {
    const engineer = new Intern('schoolname');
    expect(engineer.getSchool()).toBe('schoolname');
});

test("gets Engineer's role", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe('Intern');
});