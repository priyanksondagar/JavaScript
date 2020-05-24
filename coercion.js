//coercion is a situation in which javascript make some decision for us

let a='5'
let b=5

console.log(a-b)

//here javascript is smart enough to convert 'a' in number and do correct decision  

console.log(a+b)

//here javascript can not do proper arithmetic operation 

//another example 
let c=true
let d=4
let e=false

console.log(c+4)
console.log(d-e)
//it should generate error but it is printing 5 and 4 respectively
