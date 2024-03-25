// 3. Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let person_Name = "ameer ali bughio";
console.log(person_Name.toLowerCase());
console.log(person_Name.toUpperCase());
console.log(person_Name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
export {};
