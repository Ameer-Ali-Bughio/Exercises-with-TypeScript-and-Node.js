// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList :string[] = ["farman","imran","zaman"];
for(let i=0; i<guestList.length; i++){
    console.log(`Hello Mr. ${guestList[i]}, i would like to invite you to dinner at 9pm at hala new`)
};
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

let new_Guest :string    = "Tariq";
let absent_Guest:string  = "farman";
guestList[0] = new_Guest;
console.log(`Mr ${absent_Guest}, is not coming to the dinner`);
for(let i=0; i<guestList.length; i++){
    console.log(`Hello Mr. ${guestList[i]}, you are still invited to the dinner.`);
};

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("Good News! We are found a Bigger table, so we are invited 3 more people to the dinner. Thankyou");
guestList.unshift("Sajjad Ali");
guestList.splice(2,0,"Raju");
guestList.push("Kareem");
for(let i=0; i<guestList.length; i++){
    console.log(`Hello Mr. ${guestList[i]}, i would like to invite you to dinner at 9pm at hala new`)
};