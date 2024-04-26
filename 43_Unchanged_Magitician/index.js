// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magician = ["Ali", "Ahmad", "Saleem", "Hassan"];
function coppyArray(Array) {
    return [...Array];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(magicians => console.log(magicians));
}
const arr = coppyArray(magician);
make_great(arr);
console.log("\n\n This is my Original Array");
show_magicians(magician);
console.log("\n\n This is my Coppy modified Array");
show_magicians(arr);
export {};
