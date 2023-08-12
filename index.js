const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const { writeFile } = require('fs').promises;

// array of questions for user input
const questionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'enter the project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'enter the project description',
        },
        {
            type: 'input',
            name: 'install',
            message: 'describe the installation steps',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'describe the usage of the project',
        },
        {
            type: 'input',
            name: 'license',
            choices: ['MIT', 'Mozilla public license 2.0', 'The Unlicense'],
            message: 'select a license',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'list any contribution methods here',
        },
        {
            type: 'input',
            name: 'test',
            message: 'enter test instructions',
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email address',
        },
    ])
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data)
// }

const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();
