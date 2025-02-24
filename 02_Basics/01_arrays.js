const myarr=[0,1,2,3,4]
const myarray=new Array(10,20,30,40,50)

//console.log(myarr)
//console.log(myarray)
//console.log(myarr[2])

//Array method

//myarr.push(6)
//myarr.push(7)
//myarr.pop()






myarr.unshift(9)
myarr.shift()

//console.log(myarr.includes(3))
//console.log(myarr.indexOf(6)

//const newarr=myarr.join()               // join method convert array into string



console.log(myarr)
//console.log(newarr)

//console.log(typeof newarr)



//slice and splice

console.log("A",myarr)   // [0,1,2,3,4]

const myn=myarr.slice(1,3)  

console.log(myn)                // [1,2]

console.log("B",myarr)          // [0,1,2,3,4]

const myn2=myarr.splice(1,3)
console.log(myn2)                 //[1,2,3]

console.log("C",myarr)            //[0,4]








