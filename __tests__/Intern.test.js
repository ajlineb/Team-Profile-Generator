const Intern = require("../lib/intern.js");

describe("Engineer", () => {
    describe("GetName", () => {
        it("should get the name of the entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.name).toEqual("John");
        });
    });

    describe("GetID", () => {
        it("should get the ID of the entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.id).toEqual("1");
        });
    });

    describe("GetEmail", () => {
        it("should get the Email of the entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.email).toEqual("John@email.com");
        });
    });

    describe("GetGitHub", () => {
        it("should get the School of the entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.school).toEqual("UNC ChapelHill");
        });
    });

    describe("GetSchool_Function", () => {
        it("should get the School using a function of the intern Class entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.getSchool()).toEqual("UNC ChapelHill");
        });
    });

    describe("GetRole_Function", () => {
        it("should get the Role using a function of the intern Class entered answer", () => {
            const intern = new Intern("John", "1", "John@email.com", "UNC ChapelHill");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
})