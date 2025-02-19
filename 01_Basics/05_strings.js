let name="Anand"
let repcount=50

console.log(name+repcount+"value")


//string interpolation

console.log(`Hello my name is ${name} and my repocount is ${repcount}`)

const gameName=new  String("Anand-khatri-24")

console.log(gameName[0])
 console.log(gameName.length)
//console.log(game)
console.log(gameName[2])
console.log(gameName.charAt(2))
console.log(gameName.indexOf('d'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherstring=gameName.slice(-5,0)

console.log(anotherstring)

const str="  Anand  "
console.log(str)
console.log(str.trim())

const urlname="anand24khatri"

console.log(urlname.replace('24','-'))

console.log(urlname.includes('khatri'))

console.log(gameName.split('-'))




