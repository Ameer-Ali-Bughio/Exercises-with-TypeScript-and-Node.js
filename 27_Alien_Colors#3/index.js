"use strict";
/*   25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
   variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

  //create variable
let alien_color :string = "green";

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
if(alien_color === "green") {
  console.log("player just earned 5 points.")
};

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
alien_color  = "yellow";

if(alien_color === "green") {
  console.log("player just earned 5 points.")
};


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color :string = "green";
if(alien_color === "green") {
  console.log("player just earned 5 points.")
} else {
  console.log("player just earned 10 points.")
}


// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = "yellow";

if(alien_color === "green") {
  console.log("player just earned 5 points.")
} else {
  console.log("player just earned 10 points.")
}

// • Write one version of this program that runs the if block and another that runs the else block.


*/
Object.defineProperty(exports, "__esModule", { value: true });
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 1
let alien_color = "green";
if (alien_color === "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points.");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points.");
}
;
// version 1
alien_color = "yellow";
if (alien_color === "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points.");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points.");
}
;
// version 3
alien_color = "red";
if (alien_color === "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("player just earned 10 points.");
}
else if (alien_color === "red") {
    console.log("player just earned 15 points.");
}
;
