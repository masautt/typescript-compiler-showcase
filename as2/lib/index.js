"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
// import chalk from "chalk";
// import { lexer } from "./lexer";
// import { parser } from "./parser";
// import { getTextFromFile } from "./files";
inquirer_1.default.prompt([
    {
        type: "list",
        name: "main",
        message: "Which file would you like the parser to analyze?",
        choices: [
            "(1)      declarative.txt - Simple Declarative Statement",
            "(2)       assignment.txt - Simple Assignment Statement",
            "(3)         addition.txt - Arithmetic Addition Statement",
            "(4)      subtraction.txt - Arithmetic Subtraction Statement",
            "(5)   multiplication.txt - Arithmetic Multiplication Statement",
            "(6)         division.txt - Arithmetic Division Statement",
        ]
    }
]).then(function (answers) {
    var choice = answers.main.split(" ")[2];
    console.log(choice);
    // getTextFromFile(choice);
});
