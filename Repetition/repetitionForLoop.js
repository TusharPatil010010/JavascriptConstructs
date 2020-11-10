//selection for loop problem 1
var prompt = require('prompt-sync')();
let n = prompt("Enter the value for n: ");
n = parseInt(n);
for(var i = 0; i <= n; i++){
    console.log("2^" + i + " = " + Math.pow(2, i));
}

//selection for loop problem 2
let num = prompt("Enter the value of n to find nth harmonic ");
num = parseInt(num);
let total = 0;
for(var i = 1; i <= n; i++){
    total = total + 1/i;
}
console.log("Harmonic no for "+ num + " is "+ total);

//selection for loop problem 3
let primeInput = prompt("Enter a positive number ");
function isPrime(primeInput){
    for (var i = 2; i < Math.sqrt(parseInt(primeInput)); i++) {
        if (primeInput % i == 0) {
            return false;
        }
    }
    return true;
}
if (primeInput > 1) {
    if (isPrime(primeInput)) {
        console.log(primeInput + " is a prime number");
    } else {
        console.log(primeInput + " is a not prime number");
    }
}else{
    console.log("Invalid input");
}

//selection for loop problem 4
//Taking range of numbers to find prime numbers
let low = prompt("Enter a lower value ");
let high = prompt("Enter a higher value ");
low = parseInt(low);
high = parseInt(high);
console.log("The prime no in between " + low + " and " + high + " are ");
for( var i = low; i < high; i++){
    let flag = 0;
    for( var j = 2; j < i; j++){
        if( i % j == 0){
            flag = 1;
            break;
        }
    }
    if( i > 1 && flag == 0){
        console.log(i);
    }
}

//selection for loop problem 5
let factNum = prompt("Enter a number to find it's factorial ");
let factorial = 1;
for(var i = 1; i <= parseInt(factNum); i++){
    factorial = factorial * i;
}
console.log("Factorial of " + factNum + " is " + factorial);

//selection for loop problem 6
//prime factorization method
let factInput = parseInt(prompt('Enter a number to find its prime factors '));
while(factInput % 2 == 0){
    console.log(2);
    factInput = factInput / 2;
}
for(var i = 3; i <= factInput * factInput; i = i + 2){
    while(factInput % i == 0){
        console.log(i);
        factInput = factInput / i;
    }
}
if(factInput > 2){
    console.log(factInput);
}