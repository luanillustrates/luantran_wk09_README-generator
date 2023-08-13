function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'Mozilla public license 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
    case 'no license':
      return ``;
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `This project utilises the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>`
    case 'Mozilla public license 2.0':
      return `This project utilises the <a href="https://opensource.org/licenses/MPL-2.0" target="_blank">here</a>`
    case 'The Unlicense':
      return `This project utilises the <a href="http://unlicense.org/" target="_blank">here</a>`
    case 'no license':
      return `This project utilises no license`;
  }
}

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
  ${answers.install}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseLink(answers.license)}

  ## Contribute
  ${answers.usage}

  ## Tests
  ${answers.test}

  ## Ask Me
  Find more of my projects at https://github.com/${answers.github}
  
  Email me at ${answers.email} for any queries.
`;
}

module.exports = generateMarkdown;
