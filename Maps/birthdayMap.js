//Maps problem 2
var birthMonthMap = new Map();
var monthMap = new Map();
for(var i = 0; i < 12; i++){
    monthMap.set(i, new Array());
}
start = new Date(92, 0, 1);
end = new Date(93, 11, 31); 
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
for(var i = 0 ; i < 50; i++){
    birthMonthMap.set(i+1, randomDate(start, end));
}
console.log(birthMonthMap);
for(var i = 0; i < 12; i++){
    var tempValue = monthMap.get(i);
    for(let [key, value] of birthMonthMap){
        if(value.getMonth() == i){
            tempValue.push(key);
        }
    }
    monthMap.set(i, tempValue);
}
console.log(monthMap);