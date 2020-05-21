let owner;
owner='GrandFather'
if(true)
{
    let owner='father'
    if(true)
    {
        let owner='son'
        console.log("Curent owner is : "+owner)
    }
}
if(owner==undefined)
{
    console.log("main owner is died")
}
