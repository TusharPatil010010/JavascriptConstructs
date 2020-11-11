//Array problem 1
var array = new Array();

for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 100;
}

array.forEach(i => console.log(i));
var max = Math.max(...array);
var min = Math.min(...array);
for (var i = 0; i < array.length; i++) {
    if (array[i] == max || array[i] == min) {
        array.splice(i, 1);
        i-- ;
    }
}

var max = Math.max(...array);
var min = Math.min(...array);
console.log("2nd max element is : " + max);
console.log("2nd min element is : " + min);

//Array problem 2
var array2 = new Array();

for (var i = 0; i < 10; i++) {
    array2[i] = Math.floor(Math.random() * 900) + 100;
}

array2.forEach(i => console.log(i));
var max = Math.max(...array2);
var min = Math.min(...array2);
for (var i = 0; i < array2.length; i++) {
    if (array2[i] == max || array2[i] == min) {
        array2.splice(i, 1);
        i-- ;
    }
}
var max = Math.max(...array2);
var min = Math.min(...array2);
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);