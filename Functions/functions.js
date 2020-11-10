//Functions problem 1
var prompt = require('prompt-sync')();
function convertToCelsius(f){
    let degC = (degF - 32) * 5/9;
    console.log("Conversion of " + degF + "F to degree celsius is: " + degC + " C");
}
function convertToFahrenheit(c){
    let degF = (degC * 9/5) + 32;
    console.log("Conversion of " + degC + "C to Fahrenheit is: " + degF + " F");
}
let choice = prompt("1.Convert degC to Fahrenheit 2.Convert degF to Celsius : ");
switch(parseInt(choice)){
    case 1:
        var degC = prompt("Enter the value for degC between 0 and 100: ");
        degC = parseInt(c);
        if(0 <= degC && degC <= 100){
            convertToFahrenheit(degC);
        }else{
            console.log("Enter the valid input");
        }
        break;
    case 2:
        var degF = prompt("Enter the value for degF between 32 and 212: ");
        degF = parseInt(degF);
        if(32 <= degF && degF <= 212){
            convertToCelsius(degF);
        }else{
            console.log("Enter the valid input");
        }
        break;
}

//Functions problem 2
function checkPalindrome(number){
    let temp = 0;
    let number2 = number;
    while(number > 0){
        temp = number % 10 + temp * 10;
        number = parseInt(number / 10);
    }
    if(number2 == temp){
        console.log(number2 + " is palindrome");
    }else{
        console.log(number2 + " not palindrome");
    }
    console.log(temp);
    return temp;
}
let num = parseInt(prompt("Enter the no"));
checkPalindrome(num);

//Functions problem 3
function isPrime(primeInput){
    for (var i = 2; i < Math.sqrt(parseInt(primeInput)); i++) {
        if (primeInput % i == 0) {
            return false;
        }
    }
    return true;
}
let value = parseInt(prompt("Enter the number "));
if(isPrime(value)){
    console.log("Its a prime number");
    let palindrome = checkPalindrome(value);
    if(isPrime(palindrome)){
        console.log("The palindrome of the prime is also a prime number");
    }else{
        console.log("The palindrome of the prime is not a prime number");
    }
}else{
    console.log(value + " is not a prime no.");
}