const tinderuser=new Object()                   // singleton object
//const tinderuser={}                             //non singleton

tinderuser.id="123abc"
tinderuser.name="vishal"
tinderuser.isLoggedIn=false



console.log(tinderuser)


const regularuser={
    email : "anandkhatri@12gmail.com",
    fullname: {
        
        userfullname : {

            firstname : "anand",
            lastname: "khatri"

        }
    }
}

//console.log(regularuser.fullname.userfullname)

const obj1={1:"a" , 2:"b"}
const obj2={3:"A",4:"D"}

//const obj3={obj1,obj2}

//const obj3=Object.assign(obj1,obj2)
const obj4=Object.assign({},obj1,obj2)

//console.log(obj3)                // o/p = { '1': 'a', '2': 'b', '3': 'A', '4': 'D' }
//console.log(obj4)                //  o/p=   { '1': 'a', '2': 'b', '3': 'A', '4': 'D' }
 
const obj3={...obj1,...obj2}         //  using spread operator         // o/p= { '1': 'a', '2': 'b', '3': 'A', '4': 'D' }    
console.log(obj3)



const user=[

    {
        name: "abhishek",
        age : 24
    },
    {

    },

]

user[1].age

console.log(Object.keys(tinderuser))                             //to  print the keys
console.log(Object.values(tinderuser))                              // to print the values
console.log(Object.entries(tinderuser))                               //  arrange every key and value in single array

console.log(tinderuser.hasOwnProperty('isLoggedIn'))   // notes => we check that we have available this variable or not
.
 


const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"anand"
}


//course.price

 
const {courseInstructor:ab}=course               // destructure of object 

console.log(ab)



//{
  //  "name" : "anand",             // json api
    // "price" : "free",
    //"course" : "js"                 
//}