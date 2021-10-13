const Manager = require("../lib/manager.js");

describe("Engineer", () => {
    describe("GetName", () => {
        it("should get the name of the entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.name).toEqual("John");
        });
    });

    describe("GetID", () => {
        it("should get the ID of the entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.id).toEqual("1");
        });
    });

    describe("GetEmail", () => {
        it("should get the Email of the entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.email).toEqual("John@email.com");
        });
    });

    describe("GetGitHub", () => {
        it("should get the School of the entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.officeNumber).toEqual("200");
        });
    });

    describe("GetRole_Function", () => {
        it("should get the Role using a function of the manager Class entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.getRole()).toEqual("Manager");
        });
    });

    describe("GetRole_Function", () => {
        it("should get the Role using a function of the manager Class entered answer", () => {
            const manager = new Manager("John", "1", "John@email.com", "200");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});