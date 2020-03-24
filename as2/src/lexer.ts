import { table, getBorderCharacters } from 'table';
import { Token, TokenType } from "./types";
import chalk from 'chalk';

export const lexer = (input: string) => {
    const cleanInput = getCleanInput(input)
    const tokens: Token[] = getTokens(cleanInput);
    //printTokenTable(tokens);
    return tokens
}

const getCleanInput = (input: string): string[] => {
    const newInput = removeAll(input);;
    let cleanInput: string[] = [];
    newInput.split('').forEach((char: string) => {
        if (isKeychar(char) && char !== '.' && char !== ' ') {
            cleanInput.push(' ');
            cleanInput.push(char);
            cleanInput.push(' ');
        } else {
            cleanInput.push(char);
        }
    });
    return cleanInput
        .join('')
        .split(' ')
        .filter((e) => e !== '');
};


const getTokens = (input: string[]): Token[] =>
    input
        .filter((e) => e !== '')
        .map(
            (value: string): Token => {
                let type: TokenType = 'unknown';
                if (isKeyword(value)) type = 'keyword';
                else if (isSeparator(value)) type = 'separator';
                else if (isOperator(value)) type = 'operator';
                else if (isValidIdentifier(value)) type = 'identifier';
                else if (isRealnum(value)) type = 'real';
                return { type: type, value: value };
            }
        );


export const printTokenTable = (tokens: Token[]) => {
    let output = [['#', 'Lexeme', 'Token']];
    tokens.forEach((token, index) => {
        switch (token.type) {
            case 'identifier':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.magenta(token.value),
                    chalk.bgMagenta.black(token.type)
                ]);
                break;
            case 'keyword':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.green(token.value),
                    chalk.bgGreen.black(token.type)
                ]);
                break;
            case 'operator':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.cyan(token.value),
                    chalk.bgCyan.black(token.type)
                ]);
                break;
            case 'real':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.white(token.value),
                    chalk.bgWhite.black(token.type)
                ]);
                break;
            case 'separator':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.yellow(token.value),
                    chalk.bgYellow.black(token.type)
                ]);
                break;
            case 'unknown':
                output.push([
                    chalk.bold((index + 1).toString()),
                    chalk.red(token.value),
                    chalk.bgRed(token.type)
                ]);
                break;
        }
    });
    console.log(
        table(output, {
            border: getBorderCharacters(`norc`),
            columns: {
                0: {
                    alignment: 'right',
                    width: 2
                },
                1: {
                    alignment: 'right',
                    width: 10
                },
                2: {
                    alignment: 'left',
                    width: 12
                }
            }
        })
    );
};

//Tokens 
const isValidIdentifier = (word: string) => RegExp('^[a-zA-Z][a-zA-Z0-9$]*$').test(word);
const isKeyword = (word: string) => keywords.includes(word);
const hasKeyword = (word: string) => keywords.some((keyword) => word.includes(keyword));
const isKeywordRegex = (word: string) => RegExp('(int|float|bool|true|false|if|else|then|endif|while|whileend|do|doend|for|forend|input|output|and|or|not)$').test(word);
const keywords: string[] = ['int', 'float', 'bool', 'true', 'false', 'if', 'else', 'then', 'endif', 'while', 'whileend', 'do', 'doend', 'for', 'forend', 'input', 'output', 'and', 'or', 'not'];
const isOperator = (char: string) => operators.includes(char);
const hasOperator = (word: string) => operators.some((operator) => word.includes(operator));
const operators: string[] = ['*', '+', '-', '=', '/', '>', '<', '%'];
const isOperatorRegex = (char: string) => RegExp('(*|+|-|=|/|>|<|%)$').test(char);
const isRealnum = (word: string) => word !== '' && !isNaN(+word);
const isRealnumRegex = (word: string) => RegExp('^[0-9]+([\\,\\.][0-9]+)?$').test(word);
const isSeparator = (char: string) => separators.includes(char);
const hasSeparator = (word: string) => separators.some((separator) => word.includes(separator));
const separators: string[] = ["'", '(', ')', '{', '}', '[', ']', ',', '.', ':', ';', ' '];
const isSeparatorRegex = (char: string) => RegExp(`('|\(|\)|{||}|\[|\]|,|.|\:|;| )$`).test(char);
const keycharsArr = [...separators, ...operators];
const isKeychar = (char: string) => keycharsArr.includes(char);
const hasKeychar = (word: string) => keycharsArr.some((char) => word.includes(char));

//Removers
const removeComments = (input: string) => input.replace(/(!(.*?)!)/g, ' ');
const removeNewLines = (input: string) => input.replace(/(\r\n|\n|\r|\t)/gm, ' ');
const removeAll = (input: string): string => removeComments(removeNewLines(input));
