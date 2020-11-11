//Maps problem 1
let dice = 0;
Math.floor (Math.random() * 6) + 1;
let diceCount = new Map([[1,0], [2,0], [3,0], [4,0], [5,0], [6,0]]);
var count = 0;
while(count != 10) {
   dice = Math.floor (Math.random() * 6) + 1;
   count = updateDice(dice);
}
// console.log(diceCount.keys());
// console.log(diceCount);
var occurences = Array.from(diceCount.values());
var max = Math.max(...occurences);
var min = Math.min(...occurences);
console.log("Maximum occurrences of die = " + max);
console.log("Minimum occurrences of die = " + min);
diceCount.forEach((value, key)=>{
    if(value == max){
        console.log("Maximum : " + key + " is occuring  " + value + " times");
    }
})

diceCount.forEach((value, key)=>{
    if(value == min){
        console.log("Minimum : " + key + " is occuring " + value + " times");
    }
})
function updateDice(num){
   var value = diceCount.get(num);
   value++;
   diceCount.set(num,value);
   return value;
}