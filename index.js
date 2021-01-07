const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
const questions = [
{
    type:'input',
    message:'What is the title of your project?',
    name:'projectTitle'
},

{
    type:'input',
    message:'Write a short description of your project',
    name:'projectDes'
},

{
    type:'input',
    message:'Does anything need to be installed?',
    name:'projectInstall'
},

{
    type:'input',
    message:'What type of license?',
    name:'projectLicense'
},

{
    type:'input',
    message:'Can anyone help with this project?',
    name:'projectCollab'
},

{
    type:'input',
    message:'What is your GitHub?',
    name:'projectGit'
},

{
    type:'input',
    message:'What is your email?',
    name:'projectEmail'
},

];

// function to write README file
const writeToFile = (fileName, data) => {
    let file = generateMarkdown(data)
    console.log(fileName, "/n", file)
    fs.writeFileSync(fileName, file);
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then(response => {
        let fileName = response.porjectTitle.split(' ').join('') + '.md'
        writeToFile(fileName, response)
    })
}

// function call to initialize program
init();
