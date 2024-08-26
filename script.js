/*
// ********** FUNDAMENTALS 1 ********** 
let js = "amazing";
 
if (js === "amazing") alert("Javascript is Fun!"); // popup

console.log(40+23-854*23);

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);

console.log(true);

let boolVariable = true;
console.log("boolVariable = " + boolVariable);

console.log("***** typeof *****");
console.log("typeof boolVariable = " + typeof boolVariable);
console.log("typeof 24 = " + typeof 24);
console.log("typeof firstName = " + typeof firstName);
console.log("typeof \"amazing\" = " + typeof "amazing");
console.log("typeof true = " + typeof true);
console.log("----------");

console.log("***** Variable Value changing *****");
boolVariable = false;
console.log("boolVariable = " + boolVariable);
console.log("typeof boolVariable = " + typeof boolVariable);
console.log("----------");

console.log("***** Dynamic typing *****");
boolVariable = "Random string";
console.log("new boolVariable = " + boolVariable);
console.log("new typeof boolVariable = " + typeof boolVariable);

boolVariable = false;
console.log("reverted boolVariable = " + boolVariable);
console.log("reverted typeof boolVariable = " + typeof boolVariable);
console.log("----------");

console.log("***** undefined datatype *****");
let year;
console.log("year = " + year);
console.log("typeof year = " + typeof year);

year = 2024;
console.log("year = " + year);
console.log("typeof year = " + typeof year);
console.log("----------");

console.log("***** typeof bug *****");
console.log("typeof null = " + typeof null);
console.log("----------");

console.log("***** Template Literals *****");
const birthYear = 1945;
const currentYear = 2024;

const introduction = "I'm " +  firstName + " " + lastName + ". Age: " + (currentYear - birthYear) + " years old.";
console.log(introduction);

const newIntroduction = `With template literals: I'm ${firstName} ${lastName}. Age: ${currentYear - birthYear} years old`;
console.log(newIntroduction);


console.log("String \n\ multiple \n\ lines");

console.log(`Template literals: string with
multiple
lines`);
console.log(`----------`);

console.log("***** Type Coersion *****");
console.log(`I am ` + `23` + ` years old`);
console.log(`23`-`10`-3);
console.log(`23`+`10`-3);
console.log(`23`*`10`);
console.log(`----------`);


const favourite = prompt(`What is your favourite number`);
console.log(`Favourite number: ${favourite}`);
*/

'use strict'; // Activate strict mode for the entire code. should be at the top of the script. 
function logger() {
    console.log(`My name is Neha`);
}

logger();

function fruitProcessor (apples, oranges) {
    console.log(`apples: ${apples}, oranges: ${oranges}`);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let juice = fruitProcessor(5, 2);

console.log(juice);

const calcAge = function (birthYear) {
    return 2024 - birthYear;
} // anonymous function, function expression

// function declarations can be called before they are defined in the code. function expressions cannot be called before initialization. This happens because of a process called hoisting

const calcAge2 = birthYear => 2024 - birthYear; // arrow functions

const yearsUntilRetirement = (birthYear, retirementAge) => {
    const age = 2024 - birthYear;
    const yearsLeft = retirementAge - age;
    return yearsLeft;
}

console.log (yearsUntilRetirement(1999, 70));

const friends = ['Chandler', 'Joey', 'Monica', 'Rachel', 'Phoebe', 'Ross'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

// const arrays are mutable, and can have multiple datatypes within them
friends[5] = 'Janice';
console.log(friends);
const popped = friends.pop(); 
console.log(popped);
console.log(friends);
friends.push('Ross');
console.log(friends);
friends.unshift('Gunther'); // to add at the beginning
console.log(friends);
friends.shift();
console.log(friends);
console.log("Chandler's index:", friends.indexOf('Chandler'));
console.log("Bob's index:", friends.indexOf('Bob'));
console.log("Chandler's presence:", friends.includes('Chandler'));
console.log("Bob's presence:", friends.includes('Bob'));

