const { prompt } = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const questions = [
    "What is the team manager's name?",
    "What is the team manager's id?",
    "What is the team manager's email?",
    "What is the team manager's office number?",
    "Which type of team member do you want to add?",
    "What is your engineer's name?",
    "What is your engineer's id?",
    "What is your engineer's email?",
    "What is your engineer's GitHub username?",
    "What is your intern's name?",
    "What is your intern's id?",
    "What is your intern's email?",
    "What is your intern's school?"
]

const askQuestions = (fileName, data) => {
    prompt([
        {

        }
    ])
    .then((answers) => {
        const {} = answers;

        fs.writeFile(fileName, html, (err) =>
        err ? console.error(err) : console.log("Successfully created an HTML File!")
        );
    });
};

function init() {
    console.log("Lets build your team!");
    askQuestions("./dist/team.js", questions);
};

init();