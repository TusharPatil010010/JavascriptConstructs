//selection nested if problem 1
var prompt = require('prompt-sync')();
let value = prompt('Enter a single digit no:');
var string = "Number is ";
if(value == 0){
    console.log(string + "Zero");
}else if(value == 1){
    console.log(string + "One");
}else if(value == 2){
    console.log(string + "Two");
}else if(value == 3){
    console.log(string + "Three");
}else if(value == 4){
    console.log(string + "Four");
}else if(value == 5){
    console.log(string + "Five");
}else if(value == 6){
    console.log(string + "Six");
}else if(value == 7){
    console.log(string + "Seven");
}else if(value == 8){
    console.log(string + "Eight");
}else if(value == 9){
    console.log(string + "Nine");
}else{
    console.log("Invalid input");
}

//selection nested if problem 2
let dayNumber = prompt('Enter the number of day ');
var string = "The day is ";
if(dayNumber == 1){
    console.log(string + "Monday");
}else if(dayNumber == 2){
    console.log(string + "Tuesday");
}else if(dayNumber == 3){
    console.log(string + "Wednesday");
}else if(dayNumber == 4){
    console.log(string + "Thursday");
}else if(dayNumber == 5){
    console.log(string + "Friday");
}else if(dayNumber == 6){
    console.log(string + "Saturday");
}else if(dayNumber == 7){
    console.log(string + "Sunday");
}else{
    console.log("Invalid input");
}

//selection nested if problem 3
let number = prompt("Enter the number ");
let unit = number % 10;
let tens = Math.floor(number/10) % 10;
let hundreds = Math.floor(number/100) % 10;
let thousands = Math.floor(number/1000) % 10;
console.log("Units : " + unit + " Tens : " + tens + " Hundreds : " + hundreds + " Thousands : " + thousands);

//selection nested if problem 4
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: "); 
let c = prompt("Enter third number: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let first = a + (b * c);
console.log("(a + b * c): " + first);
let second = (a % b) + c;
console.log("((a % b) + c): " + second);
let third = c + (a / b);
console.log("(c + a / b): " + third);
let fourth = (a * b) + c;
console.log("(a * b + c): " + fourth );

Console.log('Max is' + Math.max(first, second, third, fourth));
Console.log('Min is' + Math.min(first, second, third, fourth));