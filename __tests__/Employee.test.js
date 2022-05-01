const Employee = require('../lib/Employee.js');

test('creates a Employee', () => {
    const employee = new Employee('Emplyee1');
    expect(employee.name).toBe('Emplyee1');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets Employee's name", () => {
    const employee = new Employee('Dave');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets Employee's id", () => {
    const employee = new Employee('Dave');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets Employee's email", () => {
    const employee = new Employee('Dave');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets Employee's role", () => {
    const employee = new Employee('Dave');
    expect(employee.getRole()).toBe('Employee');
});