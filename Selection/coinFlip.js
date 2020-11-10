function coinFlip(coin){
    if(coin == 1){
        return "heads";
    }
    else{
        return "tails";
    }
}

let coin = Math.floor(Math.random() * 10) % 2;
console.log(coinFlip(coin));