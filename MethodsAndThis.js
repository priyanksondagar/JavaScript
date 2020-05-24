let myTodos={
    day:'momday',
    meetings:0,
    meetsDone:0,

//this keyowrd is use for representing the variable or method of object in which keyword is used

    addMeeting:function(num){
        this.meetings=this.meetings+num
        console.log(`you have ${this.meetings} meetings today !`)
    },

    doneMeeting:function(num1)
    {
        if(this.meetings>0)
        {
        this.meetsDone=num1
        console.log(`you have done ${this.meetsDone} today ! `)
        }
        else{
            console.log('Hey lazy, there were no any meetings today !')
        }
    },

    leftMeeting:function(){
        console.log(`you have ${this.meetings-this.meetsDone} meetings left for today ! `)
    },

    reset:function(){
        this.meetings=0
        this.meetsDone=0
    }
}

myTodos.addMeeting(4)
console.log(`you have ${myTodos.meetings} today !`)
myTodos.doneMeeting(1)
console.log(`you did ${myTodos.meetsDone} meetings today!`)
myTodos.leftMeeting()
myTodos.reset()
myTodos.leftMeeting()
myTodos.addMeeting(2)
myTodos.doneMeeting(2)
myTodos.leftMeeting()
