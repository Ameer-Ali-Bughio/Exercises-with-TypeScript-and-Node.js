// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician: string[] = ["Ali", "Ahmad", "Saleem", "Hassan"];

function show_magicians(magicians: string[]) {
  magicians.forEach(magicians => 
    console.log(magicians));
}  
show_magicians(magician);