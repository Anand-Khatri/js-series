
const myDate=new Date()
//console.log(myDate.toString())

//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toJSON())

//console.log(myDate.toLocaleString())

//console.log(myDate.toLocaleTimeString())

//console.log(myDate.toTimeString())

//console.log(myDate.toUTCString())

//console.log(myDate.to());

//console.log(typeof myDate)

const newdate=new Date(23,0,11)   // thu jan 11 1923
//console.log(newdate.toDateString())


//const mynewdate=new Date(23,2,21,5,1)

const date1=new Date("2025-01-21")
//console.log(date1.toLocaleString())

let mytimestamp=Date.now()
console.log(mytimestamp)

console.log(Math.floor(Date.now()/1000))             // conversion in milli second

let date2=new Date()
//console.log(date2.getDay())
//console.log(date2.getMonth())

//console.log(date2.getFullYear())

date2.toLocaleString('Default',{

    weekday: "narrow",


})

console.log(date2)













