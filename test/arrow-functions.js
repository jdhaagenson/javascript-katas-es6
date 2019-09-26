const expect = require('chai').expect;
const arrowFunctions = require('../s_katas-6.js');

describe('arrow functions', () => {
    describe("the add function", () => {
        it("should return proper results", () => {
            expect(arrowFunctions.add(2, 2)).to.equal(4);
        });

        it("should be written as an arrow function", () => {
            expect(arrowFunctions.add.toString()).to.include("=>");
        });
    });

    describe("the increment function", () => {
        it("should add 1 to whatever number it's given", () => {
            expect(arrowFunctions.increment(2)).to.equal(3);
        });

        it("should not require parentheses around the argument", () => {
            expect(arrowFunctions.increment.toString()).to.include("number =>");
        });
    });

    describe("the decrement function", () => {
        it("should subtract 1 from whatever number it is given", () => {
            expect(arrowFunctions.decrement(1)).to.equal(0);
        });

        it("should be written without using the return keyword", () => {
            expect(arrowFunctions.decrement.toString()).to.not.include("return");
        });
        it("should not include brackets around the body", () => {
            expect(arrowFunctions.decrement.toString()).to.not.include("{");
            expect(arrowFunctions.decrement.toString()).to.not.include("}");
        });
    });
});
