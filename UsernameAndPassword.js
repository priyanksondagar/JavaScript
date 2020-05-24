let username
let password

function loginDetailChecker(uname,pass)
{
    if(uname!=='' && uname.length>4)
    {
      if(pass!=='' && pass.length>6)
      {
        username=uname
        password=pass
        console.log('username and password is valid')
      }
    }
    else{
        console.log('incorrect')
    }
}


loginDetailChecker('priyank4820','priyank123')