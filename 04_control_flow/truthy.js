
//const useremail="anandkhatr@gmail.com"
const useremail=[]

if(useremail)
{
         console.log("got email")
}
else{
      console.log("does not get email")
}


//false values

//false , 0 , -0 , BigInt 0n , "" , null , userdefined , NaN

// true values
// "0" , "false" , " ", [] , {},function(){}


if(useremail.length==0)
{
    console.log("array empty")
}

const object={

}

if(Object.keys(object).length==0)
{
    console.log("empty object")
}

//Nullish Coalescing Operator (??) : null undefined


let val1

//val1= 5 ?? 10
//val1=null ?? 20

//val1=undefined ?? 10

val1= null ?? 10 ?? 10


console.log(val1)


// terniary operator

//  condition ? true : false

const iceprice = 100

iceprice<=100 ? console.log("less than 100") : console.log("more than 100")



