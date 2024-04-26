// 3. Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

let person_Name :string = "ameer ali bughio";

let lowerCase = person_Name.toLowerCase();
let UpperCase = person_Name.toUpperCase();
let TitleCase = person_Name.split(" ").map(word =>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");

if (person_Name !== ""){
    console.log(`Hello Mr. ${person_Name}, Here are your Name :
    convert to lowerCase : ${lowerCase}.
    convert to UpperCase : ${UpperCase}.
    convert to TitleCase : ${TitleCase}.`);
}
else{
    console.log("Please Enter Your Name");
}