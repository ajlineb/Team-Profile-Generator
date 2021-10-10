const { prompt } = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//answers must be getting applied to the classes after answers are taken in?

const questions = [
    "What is the team manager's name?",                 //0
    "What is the team manager's id?",                   //1
    "What is the team manager's email?",                //2
    "What is the team manager's office number?",        //3
    "Which type of team member do you want to add?",    //4
    "What is your engineer's name?",                    //5
    "What is your engineer's id?",                      //6
    "What is your engineer's email?",                   //7
    "What is your engineer's GitHub username?",         //8
    "What is your intern's name?",                      //9
    "What is your intern's id?",                        //10
    "What is your intern's email?",                     //11
    "What is your intern's school?"                     //12
];

const askQuestions = (fileName, data, isTrue) => {
    prompt([
        {
            type: 'input',
            message: data[0],
            name: 'managerName',
            when: (isTrue),
        },
        {
            type: 'input',
            message: data[1],
            name: 'manaagerId',
            when: (isTrue),
        },
        {
            type: 'input',
            message: data[2],
            name: 'managerEmail',
            when: (isTrue),
        },
        {
            type: 'input',
            message: data[3],
            name: 'managerOffice',
            when: (isTrue),
        },
        {
            type: 'list',
            message: data[4],
            name: 'addMember',
            choices: [
                'Engineer',
                'Intern',
                'I do not want to add anymore members.',
            ],
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
    askQuestions("./dist/team.html", questions, true);
};

init();