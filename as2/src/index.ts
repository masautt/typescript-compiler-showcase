import inquirer from "inquirer";
// import chalk from "chalk";
// import { lexer } from "./lexer";
// import { parser } from "./parser";
// import { getTextFromFile } from "./files";

inquirer.prompt([
    {
        type : "list",
        name : "main",
        message : "Which file would you like the parser to analyze?",
        choices : [
            "(1)         declarative.txt - Simple Declarative Statement",
            "(2)          assignment.txt - Simple Assignment Statement",
            "(3)            addition.txt - Arithmetic Addition Statement",
            "(4)         subtraction.txt - Arithmetic Subtraction Statement",
            "(5)      multiplication.txt - Arithmetic Multiplication Statement",
            "(6)            division.txt - Arithmetic Division Statement",
        ]
    }
]).then(answers => {
    const choice = answers.main.split(" ")[2];
    console.log(choice);
    // getTextFromFile(choice);

});