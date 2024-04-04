// 21. They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface car {
    name :string,
    color : string,
    model : number,
    autoEngin : boolean,};

let car :car = {
    name : "BMW",
    color : "Black",
    model : 2022,
    autoEngin : true,
};

console.log(car);