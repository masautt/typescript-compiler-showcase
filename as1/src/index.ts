//Name of File : index.ts
//Purpose      : Starting file for this typescript project
//Summary      : Houses startLexer function that takes the path to a txt file, checks if it's not too large, then runs tokenize( )


import { tokenize } from './utils/lexer/_exports';
import { tokenizeFile } from "./utils/files";
import inquirer from "inquirer";
import chalk from "chalk";
import readline from "readline";
import { INPUT_FILE_NAME, OUTPUT_FILE_NAME } from './utils/env';


inquirer
    .prompt([
        {
            type: 'list',
            name: 'main',
            message: 'What do you want to do?',
            choices: [
                `1: Run Lexer on ${INPUT_FILE_NAME}`,
                '2: Run Lexer in your terminal',
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
                    const rl = readline.createInterface(process.stdin, process.stdout);
                    rl.setPrompt(`${chalk.yellow("cpsc323> ")}`);
                    rl.prompt();
                    rl.on('line', (input) => {
                        tokenize(input);
                        process.exit(0);
                    }).on('close', () => process.exit(0));
                    break;
            case "3":
                break;
        }
    });







// // startLexer(FILE_NAME);


