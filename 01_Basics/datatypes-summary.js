//primitive

// 7 types : String , Number , Boolean , null, undefined , symbol , BigInt




const value =100
const decimal=100.3
const flag=false


const id=Symbol('123')

const anotherid=Symbol('123')

console.log(id===anotherid)


// Reference  (non-primitive)           notes=> 1. non primitive ka return types 'object' hi aata hai
                                               //  2. funtion k return type ko object function kehte haii      

// Arrays , Objects , Functions 


const heros=["shaktiman","batman","superman"];

let myobject ={
    name : "Anand",
    age  : 24

}

const myfunct=function (){

console.log("hello world")

}

//console.log(typeof myfunct)

//console.log(typeof heros)

let city;

console.log(typeof city)




// documentation => 

//https://262.ecma-international.org/5.1/#sec-11.4.3


//return type =>

// array => object 
// funciton => function 
// null=> object 
//




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap

// Stack -> primitive datatype store hota hain
// heap -> non - primitive data store hota hai

let myemail="anand@gmail.com"

let myemailaddress=myemail
//console.log(myemailaddress)

myemailaddress="khatri@gmail.com"

console.log(myemail)
console.log(myemailaddress)


let userone={
    email: "ak@gmail.com",
    name: "anand"
}

let usertwo=userone

usertwo.email="khatri@gmail.com"

console.log(userone)
console.log(usertwo)