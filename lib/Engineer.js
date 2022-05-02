const inquirer = require('inquirer');

class Engineer {
  constructor(name, id, email, githubname) {
    const Employee = require('./Employee');
    const engineer = new Employee(name, id, email)
    this.name = engineer.name;
    this.id = engineer.id;
    this.email = engineer.email;
    this.github = githubname;
  }
  
  getGithub() {
    return this.github;
  };

  getRole() {
    return 'Engineer';
  };
}
    
module.exports = Engineer;