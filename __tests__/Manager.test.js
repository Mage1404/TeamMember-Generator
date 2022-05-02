const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(manager.name).toBe('Manager A');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test("gets manager's id", () => {
    const intern = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets manager's email", () => {
    const intern = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets manager's officenumber", () => {
    const manager = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(manager.getOfficenumber()).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
    const manager = new Manager('Manager A', 1, 'abc@email.com', 1);
    expect(manager.getRole()).toBe('Manager');
});