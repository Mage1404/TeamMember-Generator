const inquirer = require('inquirer');

const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: titleInput => {
      if (titleInput) {
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
    message: 'Enter your Employor ID (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
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
    message: 'Enter your email (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officenumber',
    message: 'Enter your officenumber (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your officenumber!');
        return false;
      }
    }
  }
];
//inquirer.prompt(questions).then(pd => {
class Manager {
  constructor(name) {
    this.name = name;
    this.id = 1;
    this.email = 'abc@mail.com';
    this.officeNumber = 1;
  }

  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };
  
  getEmail() {
    return this.email;
  };
  
  getOfficenumber() {
    return this.officeNumber;
  };

  getRole() {
    return 'Manager';
  };
}



module.exports = Manager;