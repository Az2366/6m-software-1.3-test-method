// Declaring an empty array
let empty = [];
let x = 0;
// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

let grades = [71, 54, 67, 86, 49];
console.log("grades", grades);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}



/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.
*/
for(let i=0; i<grades.length; i++){
    x = x + grades[i]
    console.log("grades =" + x);
}
grades = x / grades.length
console.log("Grades Average :"+x);
/*
Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
const arrCombine =[...arr1, ...arr2]

console.log(arrCombine);

