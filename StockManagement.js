let mobileStock={
    available:0,
    sold:0,
    newArrival:0,
    remain:0,
}

function newArrival(object,items){
    object.newArrival=object.newArrival+items
    object.available=object.available+items
}

function sold(object,items){
    object.sold=object.sold+items
    object.sold=items
    object.remain=object.available-object.sold
    object.available=object.available-items
}

newArrival(mobileStock,100)
sold(mobileStock,20)
newArrival(mobileStock,20)
sold(mobileStock,40)
newArrival(mobileStock,100)
console.log(mobileStock)
