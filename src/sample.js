const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}

//Test Driven Development
//Step 2: Write the code that will make the test pass
const checkOddEven = (num2) => {
    if (num2 % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}
//allows other js files to use the addFunc and isDivisibleBy5 using the require keyword
module.exports = {
    addFunc,
    isDivisibleBy5,
    checkOddEven
}