let nummer=51 //int
let no =51.0 //float  

if(nummer==no)
{
    console.log('both have same values')
}
else if(nummer===no) //will not print coz of different datatypes
{
    console.log('both datatypes are not same')
}

let nummer1=51 //int
let no1=51 //int

if(nummer1===no1) //will be print coz of same datatypes
{
    console.log('values and datatypes both are same')
}

let object1={} //object datatype
let object2={} //object datatype

if(object1===object2) // will not print coz two objects are always different 
{
    console.log("both are same")
}