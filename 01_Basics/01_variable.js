const accountId=355444
let accountEmail="anand@gmail.com"
var accountPassword="1234"
accountCity="Indore"
let accountState;



/*

prefer not to use var
because of issue in block scope and functional scope

*/


accountCity="Ujjain"

console.log(accountCity)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])