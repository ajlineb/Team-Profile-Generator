const fs = require("fs");

var cardEngineer;
var cardManager;
var cardIntern;

const managerFile = (data) => {
    const { name, id, email, officeNumber} = data;
    cardManager =
`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name} Manager</h5>
    <p class="card-text">ID# ${id}</p>
    <p class="card-text">Email: ${email}</p>
    <p class="card-text">Office Number: ${officeNumber}</p>
  </div>
</div>
`;
    //return cardManager;
}

const engineersFile = (array) => {
    //will use a for loop to go through each object in the engineer array
    //will develop each card that will be needed
    array.forEach(function (engineer) {
        //console.log(engineer);
        const { name, id, email, github } = engineer;
        var fileTextEngineer =
`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name} Engineer</h5>
    <p class="card-text">ID# ${id}</p>
    <p class="card-text">Email: ${email}</p>
    <p class="card-text">GitHub: ${github}</p>
  </div>
</div>
`;
        cardEngineer = cardEngineer + fileTextEngineer;
    });

    //return cardEngineer;
};

const internFile = (array) => {
    //will use a for loop to go through each object in the intern array
    //will develop each card that will be needed
    array.forEach(function (intern) {
        //console.log(intern);
        const { name, id, email, school } = intern;
        var fileTextIntern =
`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name} Intern</h5>
    <p class="card-text">ID# ${id}</p>
    <p class="card-text">Email: ${email}</p>
    <p class="card-text">GitHub: ${school}</p>
  </div>
</div>
`;
        cardIntern = cardIntern + fileTextIntern;
    });
    //return cardIntern;
}

const constructHTML = (manager, engineerArray, internArray) => {
    let fileName = './dist/team.html';
    managerFile(manager);
    engineersFile(engineerArray);
    internFile(internArray);

    let html =
`    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"
    >
    <link rel="stylesheet" href="reset.css"/>
    <link rel="stylesheet" href="style.css"/>
    <title>Team Manager</title>
</head>
<body>
    ${cardManager}
    ${cardEngineer}
    ${cardIntern}

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
</body>
</html>`;
    fs.writeFile(fileName, html, (err) =>
    err ? console.error(err) : console.log("Successfully created an HTML File!")
    );
}

module.exports = constructHTML;