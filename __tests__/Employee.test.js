const Employee = require("../lib/employee.js");

describe("Employee", () => {
    describe("GetName", () => {
        it("should get the name of the entered answer", () => {
            const name = "John";
            const employee = new Employee(name, "", "");

            expect(employee.getName).toEqual("John");
        });
    });

    describe("GetID", () => {
        
    })
})