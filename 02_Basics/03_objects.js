// sinaletena object if you want to create single object use a constuctor function else it is object literal

// Object literal syntax

const mySys = Symbol("Rajesh");

const person = {
    name: "Rajesh Sharma",
    age: 22,
    [mySys]: "my system info"
};


// console.log(person);
// console.log(person["age"]);
// console.log(person.name);
// console.log(person[mySys]);

// Object.freeze(person); // it will make the object immutable means you can't change the object properties
// Object.seal(person); // it will make the object sealed means you can change the object properties but you can't add or delete properties 

person.name = "Denish Kotadiya"; // it will change the name property of person object


// console.log(person);
// console.log(person[mySys]); // it will return undefined because mySys is a symbol not a 

person.greting = function() { // it will add a new method to person object
    console.log("Hello " + this.name);
}

console.log(person.greting);
console.log(person.greting()); // it will call the greting method of person object
