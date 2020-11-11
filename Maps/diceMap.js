//Maps problem 1
let dice = 0;
Math.floor (Math.random() * 6) + 1;
let diceCount = new Map([[1,0], [2,0], [3,0], [4,0], [5,0], [6,0]]);
var count = 0;
while(count != 10) {
   dice = Math.floor (Math.random() * 6) + 1;
   count = updateDice(dice);
}
console.log(diceCount.keys());
console.log(diceCount);
var occurences = Array.from(diceCount.values());
var max = Math.max(...occurences);
var min = Math.min(...occurences);
console.log("Maximum occurrences of die = " + max);
console.log("Minimum occurrences of die= " + min);
diceCount.forEach((value, key)=>{
    if(value == max){
        console.log("Maximum occurrences of " + key + " is occurring " + value + " times");
    }
})
console.log("Minimum occurrences of ");
diceCount.forEach((value, key)=>{
    if(value == min){
        console.log(key + "is occurring " + value + " times");
    }
})
function updateDice(num){
   var value = diceCount.get(num);
   value++;
   diceCount.set(num,value);
   return value;
}