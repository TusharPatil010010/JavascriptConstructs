//selection switch case problem 1
var prompt = require('prompt-sync')();
let value = prompt('Enter a single digit no:');
var string = "Number is ";
switch(parseInt(value)){
    case 0:
        console.log(string + "Zero");
        break;
    case 1:
        console.log(string + "One");
        break;
    case 2:
        console.log(string + "Two");
        break;
    case 3:
        console.log(string + "Three");
        break;
    case 4:
        console.log(string + "Four");
        break;
    case 5:
        console.log(string + "Five");
        break;
    case 6:
        console.log(string + "Six");
        break;
    case 7:
        console.log(string + "Seven");
        break;
    case 8:
        console.log(string + "Eight");
        break;
    case 9:
        console.log(string + "Nine");
        break;
    default:
        console.log("Invalid input");
}

//selection switch case problem 2
let dayNumber = prompt('Enter the number of day ');
var string = "The day is ";
switch(parseInt(dayNumber)){
    case 1:
        console.log(string + "Monday");
        break;
    case 2:
        console.log(string + "Tuesday");
        break;
    case 3:
        console.log(string + "Wednesday");
        break;    
    case 4:
        console.log(string + "Thursday");
        break;    
    case 5:
        console.log(string + "Friday");
        break;
    case 6:
        console.log(string + "Saturday");
        break;
    case 7:
        console.log(string + "Sunday");
        break;
    default:
        console.log("Invalid input");
}

//selection switch case problem 3
let number = prompt("Enter the input: ");
let unit = number % 10;
let tens = Math.floor(number/10) % 10;
let hundreds = Math.floor(number/100) % 10;
let thousands = Math.floor(number/1000) % 10;
console.log("Units : " + unit + " Tens : " + tens + " Hundreds : " + hundreds + " Thousands : " + thousands);

//selection switch case problem 4
let choice  = prompt('Unit Conversion: 1.Feet -> Inch 2.Feet -> Meter 3.Inch -> Feet 4.Meter -> feet ' );
let num = prompt('Enter a number for conversion: ');

switch (parseInt(choice)) {
    case 1: 
        console.log(num +" Feet = " + num * 12 + " Inch"); 
        break;  
    case 2: 
        console.log(num +" Feet = " + num * 0.3048 + " Meter"); 
        break;
            
    case 3: 
        console.log(num +" Inch = " + num / 12 + " Feet"); 
        break;
    
    case 4: 
        console.log(num +" Meter = " + num * 3.281 + " Feet"); 
        break;

    default:
        console.log("Ivalid Input");
}