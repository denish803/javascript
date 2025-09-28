const person = {
    name: 'Alice',
    age: 21,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to the JavaScript world!`);
        console.log(this)
    }
}

// person.welcomeMessage();
// console.log(this);


// Arrow function and it is explicit retuen
const person2 = () => {
    console.log(this); // it is retuen empty object {} because arrow function does not have its own 'this' context resone is lexical scope
}

// person2();


// Arrow function with parameters and implicit return
const sum = (num1, num2) => num1 + num2;

console.log(sum(10, 20));