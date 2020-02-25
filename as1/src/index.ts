//Name of File : index.ts
//Purpose      : Starting file for this typescript project
//Summary      : This file hosts the CLI


import { tokenize } from './utils/lexer/_exports';
import { tokenizeFile } from "./utils/files";
import inquirer from "inquirer";
import chalk from "chalk";
import readline from "readline";
import { INPUT_FILE_NAME, OUTPUT_FILE_NAME } from './utils/env';
import { saveTokens } from "./utils/files";

const startCLI = () => inquirer
    .prompt([
        {
            type: 'list',
            name: 'main',
            message: 'What do you want to do?',
            choices: [
                `1: Run Lexer on ${INPUT_FILE_NAME}`,
                `2: Run Lexer IDLE \t\t${chalk.bgRed("(WARNING : EXPERIMENTAL)")}`,
                `3: Exit`
            ]
        }
    ])
    .then(answers => {
        switch (answers.main[0]) {
            case "1":
                tokenizeFile(INPUT_FILE_NAME);
                break;
                case "2":
                    console.log("\nPlease note : this lexer was built primarily for analyzing .txt files and not cli input.");
                    console.log(`\tFor accurate results, please use the default ${INPUT_FILE_NAME}.\n`);
                    const rl = readline.createInterface(process.stdin, process.stdout);
                    rl.setPrompt(`${chalk.yellow("tslxr> ")}`);
                    rl.prompt();
                    rl.on('line', (input) => {
                        saveTokens(OUTPUT_FILE_NAME, tokenize(input));
                        process.exit(0)
                    }).on('close', () => process.exit(0));
                    break;
            case "3":
                break;
        }
    });

startCLI();