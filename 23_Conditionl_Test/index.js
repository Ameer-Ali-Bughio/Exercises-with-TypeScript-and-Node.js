// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// True
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');
console.log("Is car => 'bike'? I predict True.");
console.log(car >= 'bike');
console.log("Is car === 'subaru'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
console.log("Is car === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
// false
let city = "karachi";
console.log("Is city == 'Hyderabad'? I predict False.");
console.log(city == 'Hyderabad');
console.log("Is city !== 'karachi'? I predict False.");
console.log(city !== 'karachi');
console.log("Is city == 'islamabad'? I predict False.");
console.log(city == 'islamabad');
console.log("Is city !== 'karachi'? I predict False.");
console.log(city.toLowerCase() !== 'karachi');
console.log("Is city !== 'karachi'? I predict False.");
console.log(city.toUpperCase() !== 'KARACHI');
export {};
