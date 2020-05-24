let MobileDescription={
    name:'xiomi',
    model:'note 5 pro',
    price:12000,
    desc:function(){
        return `you have ${this.name} model and model is ${this.model}`
    }
}
console.log(MobileDescription.desc())

//let's use arrow function 

let MobileDescriptionNew={
    name:'vivo',
    model:'v7+',
    price:15000,
    desc:()=>{
        return `you have ${this.name} mobile and model is ${this.model}`
    }
}
console.log(MobileDescriptionNew.desc())
