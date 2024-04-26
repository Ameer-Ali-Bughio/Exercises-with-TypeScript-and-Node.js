"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message = "I love typeScript") {
    console.log(`Size of shirt is ${size} and message is ${message}`);
}
make_shirt("Large", "I love TypeScript");
make_shirt("Medium");
make_shirt("Small");
