//Task1---Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your Tasks
// 1. Print a nice output to the console, saying who has the higher BMI. The
// message is either "Mark's BMI is higher than John's!" or "John's BMI is
// higher than Mark's!" 2.
// 2. Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement.
console.log("TASK 1");

let johnMass = 60;
let johnHeight = 5.9;
let markMass = 69;
let markHeight = 6.1;

const johnBMI = johnMass/(johnHeight * johnHeight);
const markBMI = markMass/(markHeight * markHeight);

console.log(`John's Mass = ${johnMass}`);
console.log(`John's Height = ${johnHeight}`);
console.log(`Mark's Mass = ${markMass}`);
console.log(`Mark's Height = ${markHeight}`);

console.log(`John's BMI = ${johnBMI}`);
console.log(`Mark's BMI = ${markBMI}`);

if (johnBMI > markBMI) {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}else{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}

//Task2---Write a program that takes in a user's age as input and outputs whether the
// user is old enough to vote (i.e., 18 years old or older).

console.log("TASK 2");
let age = prompt("Enter your age please");

if (age >= 18) {
    console.log("You are eligible to vote!");
}else{
    console.log("Sorry! You are not eligible to vote");
}

//Task3---Write a program that takes in a user's grade as input (e.g. "A", "B", "C", "D", or
// "F") and outputs a message based on their grade. For example, if the user
// enters "A", the program could output "Great job!"

console.log("TASK 3");

let grade = prompt("Enter your Grade in capital letters:");
console.log(`The Grade is ${grade}`);
if (grade === "A") {
    console.log("Excellent job!");
}else if (grade === "B") {
    console.log("Great");    
}else if (grade === "C") {
    console.log("Good");
}else if (grade === "D") {
    console.log("Need to Improve a lot");
}else if (grade === "F") {
    console.log("Fail!");
}

//Task4---Write a program that takes in a user's age as input and outputs whether the
// user is a baby (0-2 years old), a toddler (3-5 years old), a child (6-12 years old),
// a teenager (13-18 years old), or an adult (19 years old or older).

console.log("TASK 4");
let Age = prompt("Enter your AGE:");
console.log(`Age = ${Age}`);

if (Age <= 2) {
    console.log("Your are a baby!");
}else if (Age <= 5) {
    console.log("Your are a Toddler!");
}else if (Age <= 12) {
    console.log("Your are a child!");
}else if (Age <= 18) {
    console.log("Your are a Teenager!");
}else {
    console.log("You are an Adult!");
}

//Task5---Write a program that takes in a user's number as input and outputs whether
// the number is positive, negative, or zero.

console.log("TASK 5");

let num = prompt("Enter a number");
console.log(`The number is ${num}`);

if (num < 0) {
    console.log("The number is a Negative number");
}else if (num ===0) {
    console.log("The number is Zero");
}else{
    console.log("The number a Positive number");
}