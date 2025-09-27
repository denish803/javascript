const accountId = 123465;
let accountName = "Rajesh Sharma";
var accountEmail = "rajesh@gmail.com";
password = "12345";
let country;

/*
    prefer not to use var keyword because of its function scope
    use const for variables that won't change
    use let for variables that will change 
*/

console.log(accountId);
console.table([accountId, accountName, accountEmail, password, country]);