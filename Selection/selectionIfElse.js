//Selection with if and else problem 1
let random1 = Math.floor(Math.random() * 900 + 100);
let random2 = Math.floor(Math.random() * 900 + 100);
let random3 = Math.floor(Math.random() * 900 + 100);
let random4 = Math.floor(Math.random() * 900 + 100);
let random5 = Math.floor(Math.random() * 900 + 100);

console.log(Math.min(random1, random2, random3, random4, random5));
console.log(Math.max(random1, random2, random3, random4, random5));

//Selection with if and else problem 2
var prompt = require('prompt-sync')();
let day = prompt('Enter the day: ');
let month = prompt('Enter the month: ');

if(month == "March" && day >= 1 && day <= 31){
    console.log("true");
}else if(month == "April" && day >= 1 && day <= 30){
    console.log("true");
}else if(month == "May" && day >= 1 && day <= 31){
    console.log("true");
}else if(month == "June" && day >= 1 && day <= 30){
    console.log("true");
}else{
    console.log("false");
}

//Selection with if and else problem 3
function leapYear(year){
     return  (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
 }
 
 let year = prompt("Enter the input for year: ");
 let output = leapYear(year);
 if(output){
     console.log("It's a leap year");
 }else{
     console.log("It's not a leap year");
 }

//Selection with if and else problem 4
const heads = 0;
const tails = 1;
let value = Math.floor(Math.random() * 10 )%2;
if(value == heads){
    console.log("Heads...");
}else{
    console.log("Tails....");
}