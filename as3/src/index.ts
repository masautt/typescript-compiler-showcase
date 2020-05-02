import inquirer from "inquirer";
import { lexer } from "./lexer";
import { gencode } from "./codegen";

import { readFileSync } from "fs";

inquirer.prompt([
    {
        type: "list",
        name: "main",
        message: "Which file would you like the code-generator to run on?",
        choices: [
            "(1) sampleAssignment.txt",
        ]
    }
]).then(answers => {
    const input = readFileSync(`./input/${answers.main.split(" ")[1]}`, "utf8");
    console.log(`Input : ${input}\n`);

    const tokens = lexer(input);

    // console.log(`Tokens :`);
    // console.log(tokens);
    // console.log("\n");

    console.log(gencode(tokens));
});

