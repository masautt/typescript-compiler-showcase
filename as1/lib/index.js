"use strict";
// import readline from "readline";
Object.defineProperty(exports, "__esModule", { value: true });
// const rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('TS-CMPLR> ');
// rl.prompt();
// rl.on('line', function(line) {
//     switch(line.trim()) {
//         case 'hello':
//             console.log('world!');
//             break;
//         default:
//             console.log('Say what? I might have heard `' + line.trim() + '`');
//         break;
//     }
//     rl.prompt();
// }).on('close', function() {
//     console.log('Have a great day!');
//     process.exit(0);
// });
// rl.on("line", (line : string) => {
//     switch(line.trim()) {
//         case ""
//     }
// })  
var identifiers_1 = require("./tokens/identifiers");
console.log(identifiers_1.isValidIdentifier("num1"));
console.log(identifiers_1.isValidIdentifier("num23"));
console.log(identifiers_1.isValidIdentifier("num3$"));
console.log(identifiers_1.isValidIdentifier("Du m"));
console.log(identifiers_1.isValidIdentifier("helloWorld$"));
console.log(identifiers_1.isValidIdentifier("$hello_"));
