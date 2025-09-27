let score = "100as";
let scoreNumber = Number(score); // convert string to number

console.log(score);
console.log(typeof score);
console.log(scoreNumber);
console.log(typeof scoreNumber);

console.log("--------------------------------------------------");

console.log(Number("Rajesh")); // it will return NaN because it is not a number
console.log(typeof NaN); // it is a number

console.log("--------------------------------------------------");

console.log(typeof Number(Boolean(1))); // it will return true
console.log(typeof Number(Boolean(""))); // it will return true
console.log(typeof Number(Boolean("Hello"))); // it will return false
console.log(typeof Boolean(0)); // it will return false

console.log("--------------------------------------------------");

console.log(typeof null); // it will return object but it is null