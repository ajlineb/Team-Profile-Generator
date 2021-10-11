const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, name, id, email) {
        this.github = github;

        super(name, id, email);
    };

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;