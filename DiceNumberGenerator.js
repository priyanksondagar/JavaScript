let upper=6
let lower=0

//random generates numbers between 0 to 0.99999
//multiply it by upper-lower+1 , it will give between 
//then floor it 
let numbers=Math.floor(Math.random()*(upper-lower)+1)
console.log(numbers)