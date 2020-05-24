let student={
    name:'student name',
    gender:'gender',
    enroll:1,
}

function UpdateStudent(object,name,gender,enroll)
{
    object.name=name
    object.gender=gender
    object.enroll=enroll
}

function ShowStudent(object)
{
    console.log(object)
}

function MkObject(object){
    return {
        enroll:`new enroll is : ${object.enroll+1}`,
        newName:`name of student is : ${object.name}`
    }
}
UpdateStudent(student,'priyank','male',51)
ShowStudent(student)

let newObject=MkObject(student)
console.log(newObject.enroll)