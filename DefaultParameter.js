var getUser=function(name,gender="'Gender not selected by' "){
    if(gender=='Mr.')
    {
        console.log('Welcome '+gender +name)
    }
    else
    {
        console.log('Welocme '+gender +name)
    }
}

getUser('Priyank','Mr.')
getUser('Riddhi')
