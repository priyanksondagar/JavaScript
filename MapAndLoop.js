var stud1={
    name:'priyank',
    gender:'female',
    enroll:51
}

var stud2={
    name:'riddhi',
    gender:'female',
    enroll:43
}

let students=new Map()

students.set('rank1',stud1)
students.set('rank2',stud2)

let print=students.get('rank1')
console.log(print)

for (const value of students.values()) {
    console.log(value)
}

for (const [key,value] of students.entries()) {
    console.log(`${key}=${value.name}`)
}

//lot of confusing coz of (key,value) will not work
students.forEach(function(value,key){ 
    console.log(`${key} = ${value.name}`)
})