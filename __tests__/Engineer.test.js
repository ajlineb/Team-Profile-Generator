const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    describe("GetName", () => {
        it("should get the name of the entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.name).toEqual("John");
        });
    });

    describe("GetID", () => {
        it("should get the ID of the entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.id).toEqual("1");
        });
    });

    describe("GetEmail", () => {
        it("should get the Email of the entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.email).toEqual("John@email.com");
        });
    });

    describe("GetGitHub", () => {
        it("should get the GitHub of the entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.github).toEqual("johnW1");
        });
    });

    describe("GetGitHub_Function", () => {
        it("should get the GitHub using a function of the engineer Class entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.getGitHub()).toEqual("johnW1");
        });
    });

    describe("GetRole_Function", () => {
        it("should get the Role using a function of the engineer Class entered answer", () => {
            const engineer = new Engineer("John", "1", "John@email.com", "johnW1");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
})