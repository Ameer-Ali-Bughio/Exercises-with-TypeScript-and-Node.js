// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_List = ["admin", "user1", "user2", "user3", "user4"];
if (user_List.length == 0) {
    console.log("We need to find some users!");
}
user_List = [];
if (user_List.length == 0) {
    console.log("We need to find some users!");
}
console.log(user_List);
export {};
