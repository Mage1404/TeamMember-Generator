const inquirer = require('inquirer');

class Engineer {
  constructor(githubname) {
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