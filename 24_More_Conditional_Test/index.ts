// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log("Tests for equality : ", "Ameer" === "Ameer");
console.log("Tests for equality : ", ("Ameer" as string) !== "Amir");
// • Tests using the lower case function
console.log("lowerCase function Test : ", "AMEER".toLowerCase() === "ameer");
// • Numerical tests involving equality and inequality, 
console.log("numerical equality test :", 6 === 6);
// greater than and less than,
console.log("greater than Test : ", 6 > 4,); 
console.log("less than Test :", 10 < 20,);
// greater than or equal to, 
console.log("greater than or equal to Test : ", 10 >= 5,); 
// and less than or equal to
console.log("less than or equal to Test :", 40 <= 10,);
// • Tests using "and" and "or" operators
console.log("and operator Test : ", 10 > 5 && 10 < 20);
console.log("or operator Test : ", 10 > 5 || 10 < 20);
// • Test whether an item is in a array

let array = ["Ameer", "Amir", "Ali"];
console.log("is item in array Test : ", array.includes("Ameer"));
// • Test whether an item is not in a array
console.log("is item not in array Test : ", !array.includes("Ameer"));
