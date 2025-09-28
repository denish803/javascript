const arr = [1, 2, 3, 4, 5, 6];

const sumOfArr = arr.reduce((finalValue, currectValue) => {
    return finalValue + currectValue;
}, 1);


console.log(sumOfArr);
