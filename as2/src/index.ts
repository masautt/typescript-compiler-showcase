import inquirer from "inquirer";
import { lexer } from "./lexer";
import { parser } from "./parser";
import { readFileSync } from "fs";

inquirer.prompt([
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
]).then(answers => {
    const input = readFileSync(`./input/${answers.main.split(" ")[1]}`, "utf8");
    const tokens = lexer(input);
    console.log(tokens);
    //parser(tokens);
});

