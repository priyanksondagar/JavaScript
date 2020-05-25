var p=document.getElementById('firstP')
p.textContent='i am changed'

var p1=document.querySelectorAll('p')
console.log(p1[1])
p1[1].textContent='i am also changed'

p1.forEach(function(p){
    p.textContent='we all are changed at a time'
})

p1.forEach((p)=>p.textContent='we all are again changed')