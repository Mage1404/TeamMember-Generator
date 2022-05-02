const inquirer = require('inquirer');

class Intern {
  constructor(name, id, email, school) {
    const Employee = require('./Employee');
    const intern = new Employee(name, id, email)
    this.name = intern.name;
    this.id = intern.id;
    this.email = intern.email;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}
    
module.exports = Intern;