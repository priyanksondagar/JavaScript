function validation() {
    var name = document.getElementById('name').value
    if(isNaN(name) || name>20)
    {
        document.getElementById('firstP').textContent='wrong input'
    }
    else{
        document.getElementById('firstP').textContent='correct input'
    }
}