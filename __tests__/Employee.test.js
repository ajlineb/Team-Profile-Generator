const Employee = require("../lib/employee.js");

describe("Employee", () => {
    describe("GetName", () => {
        it("should get the name of the entered answer", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.name).toEqual("John");
        });
    });

    describe("GetID", () => {
        it("should get the ID of the entered answer", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.id).toEqual("1");
        });
    });

    describe("GetEmail", () => {
        it("should get the Email of the entered answer", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.email).toEqual("John@email.com");
        });
    });

    describe("GetName_Function", () => {
        it("should get the Name using a function of the Class", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.getName()).toEqual("John");
        });
    });

    describe("GetID_Function", () => {
        it("should get the Id using a function of the Class", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.getId()).toEqual("1");
        });
    });

    describe("GetEmail_Function", () => {
        it("should get the Email using a function of the Class", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.getEmail()).toEqual("John@email.com");
        });
    });

    describe("GetRole_Function", () => {
        it("should get the Role using a function of the Class", () => {
            const employee = new Employee("John", "1", "John@email.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
})