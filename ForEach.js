let student=['priyank','dhruv','darshit','riddhi','krishna']
console.log('List of students : ')
student.forEach(function(name){
    console.log(name)
});

console.log('Relation with student : ')
function find()
{
    student.forEach(function(name)
    {
        if(name=='riddhi')
        {
            console.log('Hey! You are my crush, '+name)
        }
        else 
        {
            console.log('Hey! You are my friend, '+name)
        }
    })
}
student.forEach(find())