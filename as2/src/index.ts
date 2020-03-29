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
            "(1) declaration.txt - Simple Declarative Statement",
            "(2) assignment.txt - Simple Assignment Statement",
            "(3) addition.txt - Arithmetic Addition Statement",
            "(4) subtraction.txt - Arithmetic Subtraction Statement",
            "(5) multiplication.txt - Arithmetic Multiplication Statement",
            "(6) division.txt - Arithmetic Division Statement",
            "(7) CUSTOM.txt - Enter your own"
        ]
    }
]).then(answers => {
    const input = readFileSync(`./input/${answers.main.split(" ")[1]}`, "utf8");
    const tokens = lexer(input);
    parser(tokens);
    //console.log(isStatementList(tokens))


   
});

