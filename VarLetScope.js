var i='outside'
console.log(i)
//1 is for true
//0 is for false
if(1)
{
    var i='inside'
    console.log(i)
}
//var can be access outside of block
console.log(i)

let j='outside'
console.log(j)
if(true)
{
    let j='inside'
    console.log(j)
}
//let can not be accessible outside of block
console.log(j)