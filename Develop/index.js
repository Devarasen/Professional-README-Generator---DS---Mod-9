// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require('inquirer');
const { title } = require('process');


// TODO: Readme template
const generateReadMe = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
`# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

## License

${license}

## Badges

## Contributing

${contribution}

## Tests

${test}

## Questions

Github page: https://github.com/${github}

Email Address: ${email}

`;


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are your usage information for this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines for this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are your test instructions for this project?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'What license are you using?',
        name: 'license',
        choices: ['Apache License 2.0','MIT License','Boost Software License 1.0','Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
])
.then((answers) => {
  console.log(answers);

//   fs.writeFile(`${answers.title}.md`, htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created html doc!'))
});
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
