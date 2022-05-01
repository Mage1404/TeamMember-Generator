const inquirer = require('inquirer');

class Intern {
  constructor(schoolname) {
    this.school = schoolname;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}
    
module.exports = Intern;