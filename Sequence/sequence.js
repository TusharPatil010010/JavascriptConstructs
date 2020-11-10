//Sequence problem 1
let randomDigit = Math.floor(Math.random() * 10);

//Sequence problem 2
let diceNumber1 = Math.floor(Math.random() * 10) % 6;
let diceNumber2 = Math.floor(Math.random() * 10) % 6;

//Sequence problem 3
diceAdd = diceNumber1 + diceNumber2;

//Sequence problem 4
let random1 = Math.floor(Math.random() * 90 + 10);
let random2 = Math.floor(Math.random() * 90 + 10);
let random3 = Math.floor(Math.random() * 90 + 10);
let random4 = Math.floor(Math.random() * 90 + 10);
let random5 = Math.floor(Math.random() * 90 + 10);

sumOfRandom = random1 + random2 + random3 + random4 + random5;
avgOfRandom = sumOfRandom / 5;

//Sequence problem 4
let plotArea = (60 * 40) * 0.3048;
console.log("Area of plot is " + (plotArea));
let plotInMeters = plotArea * 0.000247105;
console.log("Area of 25 such plots" + 25 * plotInMeters);