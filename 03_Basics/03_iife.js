// IIFE full form - Immediately Invoked Function Expression

// IIFE defination is function which is executed immidiately after its creation. and it is also called self invoking function.

// named IIFE
(function asd() {
    console.log("IIFE executed");
})();

// anonymous IIFE
(() => {
    console.log("IIFE Arrow function executed");
})();

// IIFE with parameters
((num1, num2) => {
    console.log(num1 + num2);
})(1, 2)
