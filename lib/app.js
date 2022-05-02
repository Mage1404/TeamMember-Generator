const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const fs = require('fs');


const managerquestions = [
  {
  type: 'input',
  name: 'name',
  message: 'What is your manager name? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'id',
  message: "Enter your manager's ID (Required)",
  validate: IdInput => {
    if (IdInput) {
      return true;
    } else {
      console.log('Please enter your id!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Enter your manager's email (Required)",
  validate: EmailInput => {
    if (EmailInput) {
      return true;
    } else {
      console.log('Please enter your email!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'officeNumber',
  message: "Enter your manager's officenumber (Required)",
  validate: OfficenumberInput => {
    if (OfficenumberInput) {
      return true;
    } else {
      console.log('Please enter your officenumber!');
      return false;
    }
  }
}
];
const engineerquestions = [
  {
  type: 'input',
  name: 'name',
  message: 'What is your employee name? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your employee name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'id',
  message: "Enter your employee's ID (Required)",
  validate: IdInput => {
    if (IdInput) {
      return true;
    } else {
      console.log('Please enter your id!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Enter your employee's email (Required)",
  validate: EmailInput => {
    if (EmailInput) {
      return true;
    } else {
      console.log('Please enter your email!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'github',
  message: "Enter your github name (Required)",
  validate: GithubInput => {
    if (GithubInput) {
      return true;
    } else {
      console.log('Please enter your github!');
      return false;
    }
  }
}
];
const internquestions = [
  {
  type: 'input',
  name: 'name',
  message: 'What is your employee name? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your employee name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'id',
  message: "Enter your employee's ID (Required)",
  validate: IdInput => {
    if (IdInput) {
      return true;
    } else {
      console.log('Please enter your id!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: "Enter your employee's email (Required)",
  validate: EmailInput => {
    if (EmailInput) {
      return true;
    } else {
      console.log('Please enter your email!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'school',
  message: "Enter your school name (Required)",
  validate: schoolInput => {
    if (schoolInput) {
      return true;
    } else {
      console.log('Please enter your school!');
      return false;
    }
  }
}
];


class App {
  constructor() {
    this.data = [];
  };

  initialize() {
    inquirer
      .prompt(managerquestions)
      .then(answers => {
        this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        this.data.push(this.manager);
        this.AddEmployee();
      })
    }
  
  AddEmployee() {
      inquirer
      .prompt({
        type: 'list',
        message: 'Do you want to add your employee?',
        name: 'action',
        choices: ['Engineer', 'Intern', 'I do not want to add anymore employee (finish building my team)']
      }).then(({ action }) => {
        if (action === 'Engineer') {
          inquirer.prompt(engineerquestions)
          .then(answers => {
            this.engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            this.data.push(this.engineer);
            console.log("You have added Engineer: " + answers.name);
            this.AddEmployee()
          })
        } else if (action === 'Intern') {
          inquirer.prompt(internquestions)
          .then(answers => {
            this.intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            this.data.push(this.intern);
            console.log("You have added intern: " + answers.name)
            this.AddEmployee()
          })
        } else {
          const page = generatePage(this.data);
          fs.writeFile('./dist/index.html', page, err => {
          if (err) throw new Error(err);
          })
          console.log("HTML page has been created");
        }
      }
    )
  }

  getData() {
    return this.data;
  }
}


module.exports = App;
