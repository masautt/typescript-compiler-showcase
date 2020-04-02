"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var lexer_1 = require("./lexer");
var fs_1 = require("fs");
inquirer_1.default.prompt([
    {
        type: "list",
        name: "main",
        message: "Which file would you like the parser to analyze?",
        choices: [
            "(1) addition.txt - Arithmetic Addition Statement",
            "(2) assignment.txt - Simple Assignment Statement",
            "(3) declaration.txt - Simple Declarative Statement",
            "(4) division.txt - Arithmetic Division Statement",
            "(5) multiplication.txt - Arithmetic Multiplication Statement",
            "(6) subtraction.txt - Arithmetic Subtraction Statement",
        ]
    }
]).then(function (answers) {
    var input = fs_1.readFileSync("./input/" + answers.main.split(" ")[1], "utf8");
    var tokens = lexer_1.lexer(input);
    console.log(tokens);
    //parser(tokens);
});
