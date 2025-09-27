const userDetials = {};

userDetials.name = "John";
userDetials.age = 30;
userDetials.userPesionality = {
    height: "5.9",
    weight: "70kg",
    working: true,
    officeDetails: {
        company: "ABC Corp",
        position: "Developer"
    }
};

// console.log(userDetials.userPesionality.officeDetails.company);

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};

const newObj1 = {obj1, obj2}; // it will create object inside object
console.log(newObj1);

const newObj2 = Object.assign({}, obj1, obj2); // it will merge two objects
console.log(newObj2);

const newObj = {...obj1, ...obj2}; // it will merge two objects
console.log(newObj);

console.log(Object.keys(newObj)); // it will return array of keys
console.log(Object.values(newObj));

console.log(Object.entries(userDetials)); // it will return array of key value pairs

console.log(userDetials.hasOwnProperty("dsf"));

const {userPesionality: od} = userDetials; // it will destructure object
console.log(od);

