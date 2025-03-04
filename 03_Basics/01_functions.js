

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





function calculateCartPrice(...num1)           // ...num1 -> rest operator
{
  return num1
}

console.log(calculateCartPrice(100,200,50,500))   //o/p -> [100,200,50,500]


const user ={

  username : "Anand",
  Price : "100"

}

function handleobject(userobject)
{
     console.log(`username is ${userobject.username} and price is ${userobject.Price} `)
}


//handleobject(user)
handleobject({
  username : "sam",
  Price : 200
})


const mynewarray=[10,20,30,40]

function secondarray(returnarray){
  return returnarray[0]
}

//console.log(secondarray(mynewarray))       // o/p= 10

console.log(secondarray([100,200,300,400]))    // o/p=100 

