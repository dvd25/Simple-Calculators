
console.log("- CHOOSE A OPERATOR: 1: ADDITION, 2: SUBTRACTION, 3: MULTIPLICATION, 4: DIVISION");
var prompt = require('prompt-sync')();
var userInput = prompt(" Enter your operator choice: ");

console.log("- CHOOSE TWO NUMBERS TO OPERATE ON")
var prompt2 = require('prompt-sync')(); 
var userInput2 = prompt(" Enter your first number: ");

var prompt3 = require('prompt-sync')(); 
var userInput3 = prompt(" Enter your second number: ");

let op = parseInt(userInput);
let x = parseInt(userInput2);
let y = parseInt(userInput3);
let result;

switch(op) {
    case 1:
        result = x + y;
        console.log("Addition results: " + result);
        break;
    case 2:
        result = x - y;
        console.log("Subtraction results: " + result);
        break;
    case 3:
        result = x * y;
        console.log("Multiplication results: " + result);
        break;
    case 4:
        if(y != 0){
            result = x % y;
            console.log("Division results: " + result);
            break;
        }
        else {
            console.log("Not divisible by 0!");
            break;
        }
    default:
        console.debug("Invalid")
        break;
}

