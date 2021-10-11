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

const askQuestionsManager = (data) => {
    prompt([
        {
            type: 'input',
            message: data[0],
            name: 'managerName'
        },
        {
            type: 'input',
            message: data[1],
            name: 'manaagerId'

        },
        {
            type: 'input',
            message: data[2],
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: data[3],
            name: 'managerOffice'
        }
    ])
    .then((answersManager) => {
        const { managerName, managerId, managerEmail, managerOffice } = answersManager;

        askMembers(questions);
        return {
            managerName, managerId, managerEmail, managerOffice
        };
        // fs.writeFile(fileName, html, (err) =>
        // err ? console.error(err) : console.log("Successfully created an HTML File!")
        // );
    });
};

const askMembers = (data) => {
    prompt([
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
    .then((answer) => {
        const { addMember } = answer;
        if (addMember === 'Engineer') {
            //moves on to the questions for an Engineer member
            askQuestionsEngineer(questions);
        };

        if (addMember === 'Intern') {
            //moves on to the questions for an Intern member
            askQuestionsIntern(questions);
        };

        if (addMember === 'I do not want to add anymore members.') {
            //ends the questions and begins setting up the html

        };
    });
};

const askQuestionsEngineer = (data) => {
    prompt([
        {
            type: 'input',
            message: data[5],
            name: 'engineerName',
        },
        {
            type: 'input',
            message: data[6],
            name: 'engineerId',
        },
        {
            type: 'input',
            message: data[7],
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: data[8],
            name: 'engineerGitHub',
        },
    ])
    .then((answers) => {
        const { engineerName, engineerId, engineerEmail, engineerGitHub } = answers;

        askMembers(questions);
        return {
            engineerName, engineerId, engineerEmail, engineerGitHub
        };
    });
};


const askQuestionsIntern = (data) => {
    prompt([
        {
            type: 'input',
            message: data[9],
            name: 'internName',
        },
        {
            type: 'input',
            message: data[10],
            name: 'internId',
        },
        {
            type: 'input',
            message: data[11],
            name: 'internEmail',
        },
        {
            type: 'input',
            message: data[12],
            name: 'internSchool',
        },
    ])
    .then((answers) => {
        const { internName, internId, internEmail, internSchool } = answers;

        askMembers(questions);
        return {
            internName, internId, internEmail, internSchool
        };
    });
};

function init() {
    console.log("Lets build your team!");
    askQuestionsManager(questions);
    //askQuestionsManager("./dist/team.html", questions, true);
};

init();