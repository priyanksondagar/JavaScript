let AvailableFlat=[101,102,201,202,301,302,401,402,501,502]
console.log(AvailableFlat)

//starting of array
//shift for removing first element of array
console.log("Removed element is : "+AvailableFlat.shift())
console.log(AvailableFlat)

//unshift for adding first element of array
let addFlat=101
console.log("element adding to first position : "+addFlat)
AvailableFlat.unshift(addFlat)
console.log(AvailableFlat)

//last 
//removing last element
console.log("element to be removed : "+AvailableFlat.pop())
console.log(AvailableFlat)
//adding element to last
let adding=601
console.log("element to be adding is : "+adding)
AvailableFlat.push(adding)
console.log(AvailableFlat)

//middle
AvailableFlat.splice(8,1,'sold')
AvailableFlat.forEach(flat => console.log(flat))