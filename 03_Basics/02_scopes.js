
let a = 100

if(true)
    {
        let a=10
        const b=20
        var c=30
        //console.log("inner :",a)
        
    } 

//console.log(a)
//console.log(b)
//console.log(c)




//****************************nested scope *****************************

function one()
{
    const username="anand"

    function two()
    {
        const website="google"
        console.log(username)
    }

    //console.log(website)

    two()
}

//one()


if(true)
{
    const username="anand"

    if(username==="anand")
    {
        const website="youtube"
        //console.log(username+website)


    }
    //console.log(website)
}

//console.log(username)



// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++

console.log(addone(10))
function addone(num)
{
    return num+1
}


addtwo(20)
const addtwo=function(num)           // <--------- expression
{                                                     
    return num+2
}






