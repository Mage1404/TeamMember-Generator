const inquirer = require('inquirer');

class Employee {
  constructor(name) {
    this.name = name;
    this.id = 1;
    this.email = 'abc@mail.com';
  };

  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };
  
  getEmail() {
    return this.email;
  };
  
  getRole() {
    return 'Employee';
  };
}



module.exports = Employee;