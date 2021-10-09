const { prompt } = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

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