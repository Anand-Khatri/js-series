
const user={
    username: "Anand",
   Price : 500,

   welcomemessage : function(){
    console.log(`${this.username} , welcome to website`)
    console.log(this)
   }

}


//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()

//console.log(this)     // o/p => {}



//note => browser k ander global object "window"  hai



//function chai()
//{
    //const username="khatri"
 //   console.log(this)
//}

//chai()

//}


//const chai = function (){
 //   let name="anand"
  //  console.log(this.name)           //o/p=undefined
//}

//chai()      


//const chai = () =>{             // arrow function
  //  let name="anand"
    //console.log(this)    
//}     

//chai()


  //const addtwo=(num1,num2) => {
  //      return num1+num2
 // }

 
 // implicent returned
 //const addtwo = (num1,num2) => num1+num2
  
 
 const addtwo = (num1,num2) => ({username: "anand"})

  console.log(addtwo(2,3))


