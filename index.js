const { prompt } = require("inquirer");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const construct = require("./src/fabricator");

//containers
var manager;
var engineers = [];
var interns = [];

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
            name: 'managerId'

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
        manager = new Manager(managerName, managerId, managerEmail, managerOffice);
        console.log(manager);
        askMembers(questions);
        return manager;
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
            console.log(manager);
            console.log(engineers);
            console.log(interns);
            construct(manager, engineers, interns);
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

        engineers.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub));
        console.log(engineers);
        askMembers(questions);
        return engineers;
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

        interns.push(new Intern(internName, internId, internEmail, internSchool));
        console.log(interns);
        askMembers(questions);
        return interns;
    });
};

function init() {
    console.log("\x1b[35m%s\x1b[0m", "\nLets build your team!\n");
    askQuestionsManager(questions);
    //askQuestionsManager("./dist/team.html", questions, true);
};

init();