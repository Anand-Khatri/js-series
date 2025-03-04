

function myfunction(){
 console.log("A")
 console.log("n")
 console.log("a")
console.log("n")
console.log("d")
}



//myfunction()


function addTwoNumber(number1,number2)
{
   //let result= number1+number2
   //return result

   return number1+number2
}

const result=addTwoNumber(10,20)
//console.log("Result :",result)


//function loginusermessage(username)
function loginusermessage(username="sam")
{
    //if(username===undefined)
    if(!username)
      {
           console.log("please enter a username")
           return
       }  
         return `${username} logged in`
    
}

console.log(loginusermessage())

