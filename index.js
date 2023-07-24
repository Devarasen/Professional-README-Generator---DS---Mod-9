// Include packages needed for this application

const fs = require(`fs`);
const inquirer = require('inquirer');


// Badge constants

const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const boostBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

const mozillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";


// TODO: Readme template

const generateReadMe = ({ title, description, installation, usage, contribution, test, license, github, email, badges }) =>
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

${badges}

${license}

## Contributing

${contribution}

## Tests

${test}

## Questions

Github page: https://github.com/${github}

Email Address: ${email}

`;

function badgeRender(license) {
    if (license === 'Apache License 2.0') {
        return apacheBadge;
    } else if (license === 'MIT License') {
        return mitBadge;
    } else if (license === 'Boost Software License 1.0') {
        return boostBadge;
    } else {
        return mozillaBadge;
    }
}

// Create an array of questions for user input and render readMe file in generated folder
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

  const badges = badgeRender(answers.license);

  const readMeContent = generateReadMe({ ...answers, badges});

  fs.writeFile(`./generated/${answers.title}.md`, readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created readMe doc!'))
});