
const convertTors=(dollar)=>{
    if(typeof dollar == typeof 1){
        return dollar*70
    }
    else{
        throw Error('entered value is not valid')
    }
}
try{
const rupees = convertTors(5)
console.log(rupees)
}
catch(e)
{
    console.log(e)
}
console.log('if error will generate and i was wrote in a try catch block, i will print')
