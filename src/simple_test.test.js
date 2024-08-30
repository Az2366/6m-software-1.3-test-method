//use the function from sample.js

const {addFunc, isDivisibleBy5, checkOddEven} = require('./sample');

//create the test suite
describe("Test Suite for sample.js functions", () => {
    //write the test 
    it("should add 3 numbers", () => {
        const result = addFunc(1,3,4);
        //compare the result to an expected value
        expect(result).toBe(8);
    })

    //Activity : Write a test that tests the function of isDivisibleBy5 and make it pass

    it("should return true if the number is divisible by 5", () => {
        const result = isDivisibleBy5(5555555555555555);
        expect(result).toBe(true);
    })

    //Test Driven Development
    //Step 1: Write the test
    it("shoud check if odd or even", () => {
        const result = checkOddEven(1999);
        expect(result).toBe("odd");
    })
})

describe("Test Suite for arrays.js functions", () => {
    const {sumArray, findMax, findMin} = require('./arrays');

    it("should sum the array", () => {
        const result = sumArray([1,2,3,4,5]);
        expect(result).toBe(15);
    })

    it("should find the maximum value in the array", () => {
        const result = findMax([1,2,3,4,5]);
        expect(result).toBe(5);
    })

    it("should find the minimum value in the array", () => {
        const result = findMin([1,2,3,4,5]);
        expect(result).toBe(1);
    })
})