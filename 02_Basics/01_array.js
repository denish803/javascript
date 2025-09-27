
// first type of Array method declaration
const arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(typeof arr);
// console.log(Array.isArray(arr)); // it will return true if it is array otherwise false

// console.log(arr.length); // it will return length of array

// console.log(arr[0]); // it will return first element of array
// console.log(arr[4]); // it will return last element of array
// console.log(arr[-2]); // it will return undefined because -2 is not a valid index


// second type of Array method declaration
const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2);


// third type of Array method declaration
const arr3 = Array.of(1, 2, 3, 4, 5, "ds");
console.log(arr3);

/*
    arr3.push(6); // it will add element at the end of array
    arr3.push("hello");
    console.log(arr3);
    arr3.pop(); // it will remove element from the end of array

    arr3.unshift("first"); // it will add element at the beginning of array
    console.log(arr3);
    arr3.shift(); // it will remove element from the beginning of array
    console.log(arr3);
*/

// console.log(arr3.indexOf(30)); // it will return index of element if found otherwise -1
// console.log(arr3.includes(3)); // it will return true if element found otherwise false


// const newArr = arr3.join(", ");

// console.log(newArr);

console.log(arr3.slice(1, 4)); // it will return new array from index 1 to 4 but not include 4
console.log(` B : ${arr3}`); // original array will not be changed 

console.log(arr3.splice(1, 3)); // it will remove element from index 1 to 3 and return removed elements
console.log(` A : ${arr3}`); // original array will be changed
