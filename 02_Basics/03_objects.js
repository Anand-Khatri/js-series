//singleton
//object.create

// object liter


const Mysym=Symbol("key")

const jsuser={
    name : "Anand",
    age : 24,
    Mysym : "mykey",
    locaton : "Indore",
    email : "anandkhatri1@gmail.com",
    isloggedin : false,
    lastlogindays : ['Monday','tuesday']
}


console.log(jsuser.name)
//console.log(jsuser["name"]

jsuser.email = "khatri@gmail.com"

console.log(jsuser.email)
console.log(jsuser["email"])
//Object.freeze(jsuser)
jsuser.email="anandkhatri@gmail.com"


console.log(jsuser.email)

console.log(jsuser)


jsuser.greeting = function(){
     console.log("hello js user")
}

jsuser.greetingtwo = function(){
      console.log(`hello js user , ${this.name}`);
}


 
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());



