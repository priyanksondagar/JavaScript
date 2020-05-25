document.querySelector('#form1').addEventListener('submit',(e)=>{
    e.preventDefault();
    var password=e.target.password.value
    var rePassword=e.target.rePassword.value
    if(password==rePassword){
        var newP=document.createElement('p')
        newP.textContent="both are same"
        document.querySelector('#form1').appendChild(newP)
    }
    else{
        var newP1=document.createElement('p')
        newP1.textContent="both are not same"
        document.querySelector('#form1').appendChild(newP1)
        // event.target.username.value=''
        // event.target.password.value=''
        // event.target.rePassword.value=''
    }
})
