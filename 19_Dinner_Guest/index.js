"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["farman", "imran", "zaman"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello Mr. ${guestList[i]}, i would like to invite you to dinner at 9pm at hala new`);
}
;
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let new_Guest = "Tariq";
let absent_Guest = "farman";
guestList[0] = new_Guest;
console.log(`Mr ${absent_Guest}, is not coming to the dinner`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello Mr. ${guestList[i]}, you are still invited to the dinner.`);
}
;
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
guestList.splice(2, 0, "Raju");
guestList.push("Kareem");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello Mr. ${guestList[i]}, i would like to invite you to dinner at 9pm at hala new`);
}
;
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that 
// prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(`Sorry We Can not arrange bigger table is  in this time and we are invite only 2 people for the dinner`);
while (guestList.length > 2) {
    let GuestRemove = guestList.pop();
    console.log(`Sorry Mr ${GuestRemove}, your not invited to the dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, your are still invited to the Dinner. Thank you`);
}
;
guestList.splice(0, 2);
console.log(guestList);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
console.log(`Total number of Guest are : ${guestList.length}`);
export {};
