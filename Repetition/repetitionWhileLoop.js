//Selection while loop problem 1
var prompt = require('prompt-sync')();
let powInput = prompt("Enter the number ");
let value = 0;
var i = 0;
while(value < 256 ){
    i++;
    value = Math.pow(2,i);
    console.log("2^" + i + " = " + value);
}

//Selection while loop problem 3
const HEADS = 0;
const TAILS = 1;
let headWins = 0;
let tailWins = 0;
while(true){
    let value = Math.floor(Math.random() * 10) % 2;
    if(value == HEADS){
        headWins++;
    }else{
        tailWins++;
    }

    if(headWins == 11 || tailWins == 11){
        break;
    }
}
if(headWins == 11){
    console.log("Winner is heads");
}else{
    console.log("Winner is tails")
}

//Selection while loop problem 4
let money = 100;
let wincount = 0;
let betcount = 0;
let betMoney = 1;

while(money != 0 && money <200){
    let chance = Math.floor(Math.random() * 10) % 2;
    if(chance == 1){
        money = money + betMoney;
        wincount++;
    }else{
        money = money - betMoney;
    }
    betcount++;
}
if(money == 200){
    console.log("won with bet count of "+ betcount +" with winning count of "+wincount);
}else{
    console.log("you lost!!");
}
