//Array problem 5
var input = new Array();
for(var i = 1 ; i < 100 ; i++){
    if(i % 11 == 0){
        input.push(i);
    }
}
input.forEach(i => console.log(i));