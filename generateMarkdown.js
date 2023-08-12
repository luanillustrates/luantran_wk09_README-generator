function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    case 'Mozilla public license 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '<a href="https://opensource.org/licenses/MIT" target="_blank">here</a>'
    case 'Mozilla public license 2.0':
      return '<a href="https://opensource.org/licenses/MPL-2.0" target="_blank">here</a>'
    case 'The Unlicense':
      return '<a href="http://unlicense.org/" target="_blank">here</a>'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${renderLicenseBadge(answers.license)}
  # ${answers.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Ask Me](#ask-me)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}
  License details can be found ${renderLicenseLink(answers.license)}

  ## Contribute
  ${answers.usage}

  ## Tests
  ${answers.test}

  ## Ask Me
  ${answers.github}
  ${answers.email}
`;
}

module.exports = generateMarkdown;
