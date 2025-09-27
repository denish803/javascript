let dates = new Date();


// console.log(`dates : ${dates}`);
// console.log(`dates to date string : ${dates.toDateString()}`);
// console.log(`date in to string : ${dates.toString()}`);
// console.log(`date locale Strin : ${dates.toLocaleString()}`)
// console.log(`date to tome String : ${dates.toTimeString()}`);
// console.log(`date to ISO String : ${dates.toISOString()}`);
// console.log(`Date with UTC time : ${dates.toUTCString()}`);
// console.log(`Date to JSON : ${dates.toJSON()}`);


let specificDate = new Date('2023-06-20 14:11:00');
// console.log(`specific date : ${specificDate.toDateString()}`);
// console.log(`specific date to time string : ${specificDate.toLocaleString()}`);


console.log(specificDate.getTime());
console.log(Math.floor(specificDate.getTime() / 1000));

console.log(specificDate.getFullYear());
console.log(specificDate.getMonth() + 1);   // month start from 0 to 11
console.log(specificDate.getDate());
console.log(specificDate.getDay());
console.log(specificDate.getHours());
console.log(specificDate.getMinutes());
console.log(specificDate.getSeconds());
console.log(specificDate.getMilliseconds());
console.log(specificDate.getTimezoneOffset());

specificDate.setFullYear(2024);
specificDate.setMonth(11);

console.log(specificDate.toLocaleString());