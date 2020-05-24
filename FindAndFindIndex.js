let todo=[
    {
        title:'go to gym',
        isDone:false,
    },
    {
        title:'take breakfast',
        isDone:false,
    },
    {
        title:'read books',
        isDone:false,
    }
]

let index=todo.findIndex(function(arr,index){
    return arr.isDone===false
})

//console.log(index)

let findtodo=function(mytodo,title){
    let index=todo.findIndex(function(mytodo1){
        return mytodo1.title===title
    })
    return mytodo[index]
}

let findtodo1=function(mytodo,title){
    let object=todo.find(function(todo){
        return todo.title===title
    }
    )
    return object
}

let print=findtodo(todo,'take breakfast')
console.log(print)

let print1=findtodo1(todo,'go to gym')
console.log(print1)