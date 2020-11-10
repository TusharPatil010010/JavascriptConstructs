const readline = require('readline');

function leapyear(year)
{
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0))
    {
        return "Leap Year";
    }
    else{
        return "Not a leap year";
    }
};

const leapYear = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leapYear.question('Enter year? ', (ans) => {
  console.log(leapyear(ans))
  leapYear.close();
});