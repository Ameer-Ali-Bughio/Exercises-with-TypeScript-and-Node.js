"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
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
