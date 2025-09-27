function myName() {
    console.log("My name is Deinsh Kotadiya");
}

// myName();


function addTwoNumber(num1, num2) {
    return num1 + num2;
}

let returnValue = addTwoNumber(10, 20);
console.log(returnValue);


function addTwoNumberAndMultiply(num1, num2, ...otherNumbers) {
    console.log((num1 + num2) * otherNumbers[0]);
}

addTwoNumberAndMultiply(10, 20, 2, 1); 
