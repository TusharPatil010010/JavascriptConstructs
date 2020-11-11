//Array problem 4
var array = new Array(-2, 0, 2, 4, -2, -8);

array.forEach(i=>console.log(i));
for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            if (array[i] + array[j] + array[k] == 0) {
                console.log("Sum of elements : " + array[i] + " " + array[j] + " " + array[k] + " " + "is zero");            }
        }
    }
}