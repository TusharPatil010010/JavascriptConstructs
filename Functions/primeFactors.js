//Array problem 3
var prompt = require('prompt-sync')();
let factInput = parseInt(prompt('Enter a number to find prime factors '));
var outputArray = new Array();
while(factInput % 2 == 0){
    outputArray.push(2);
    factInput = factInput / 2;
}
for(var i = 3; i <= factInput * factInput; i = i + 2){
    while(factInput % i == 0){
        factInput = factInput / i;
        outputArray.push(i);
    }
}
if(factInput > 2){
    outputArray.push(2);
}
console.log("The factors are :");
for(var i = 0; i < outputArray.length; i++){
    console.log(outputArray[i]);
}
