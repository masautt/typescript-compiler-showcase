//Name of File : output.ts
//Purpose      : Prints the token table
//Summary      : Converts the array of Token Objects to a 2 dimensional array to be printed in the console by this npm package https://www.npmjs.com/package/table

import { table, getBorderCharacters } from 'table';
import chalk from 'chalk';
import { Token } from '../../types/tokens';
import { IDENTIFIER_LIMIT, REALNUM_LIMIT, FILE_SIZE_LIMIT, INPUT_FILE_NAME } from '../env';

export const printTokenTable = (tokens: Token[]) => {
    let output = [['#', 'Lexeme', 'Token']];
    tokens.forEach((token, index) => {
        switch (token.type) {
            case 'identifier':
                isOverIdentifierLimit(token.value)
                    ? output.push([
                          chalk.bold((index + 1).toString()),
                          chalk.red(token.value),
                          chalk.bgRed.black(token.type)
                      ])
                    : output.push([
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
                isOverRealnumLimit(token.value)
                    ? output.push([
                          chalk.bold((index + 1).toString()),
                          chalk.red(token.value),
                          chalk.bgRed.black(token.type)
                      ])
                    : output.push([
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

export const printFileErrors = () => console.log(`${chalk.red("ERROR :")} ${chalk.yellow(INPUT_FILE_NAME)} is too large. File limit size is ${chalk.yellow(FILE_SIZE_LIMIT /
    1000 + " KB")}. You can change the ${chalk.yellow("FILE_SIZE_LIMIT")} in '${chalk.yellow("./utils/env")}'`)


export const printTokenErrors = (tokens: Token[]): boolean => {
    let hasErrors = false;

    tokens.forEach((token, index) => {
        if (token.type === 'unknown') {
            hasErrors = true;
            console.log(
                `${chalk.red('ERROR :')}  ${chalk.yellow("getTokens( )")} returned type ${chalk.bgRed(
                    'unknown'
                )} for value ${chalk.red(token.value)} at position ${chalk.yellow(index + 1)}`
            );
            console.log('');
        }
        if (token.type === 'identifier' && isOverIdentifierLimit(token.value)) {
            hasErrors = true;
            console.log(
                `${chalk.red('ERROR :')}  ${chalk.yellow("getTokens( )")} returned type ${chalk.bgRed(
                    'identifier'
                )} for value ${chalk.red(token.value)} at position ${chalk.yellow(
                    index + 1
                )}, however it excedes the ${chalk.yellow("IDENTIFIER_LIMIT")} (${IDENTIFIER_LIMIT}) set in ${chalk.yellow("'./src/utils/env'")}`
            );
            console.log('');
        }
        if (token.type === 'real' && isOverRealnumLimit(token.value)) {
            hasErrors = true;
            console.log(
                `${chalk.red('ERROR :')}  ${chalk.yellow("getTokens( )")} returned type ${chalk.bgRed(
                    'real'
                )} for value ${chalk.red(token.value)} at position ${chalk.yellow(
                    index + 1
                )},  however it excedes the ${chalk.yellow("REALNUM_LIMIT")} (${REALNUM_LIMIT}) set in ${chalk.yellow("'./src/utils/env'")}`
            );
            console.log('');
        }
    });
    return hasErrors;
};

const isOverIdentifierLimit = (word: string) => word.length > IDENTIFIER_LIMIT;
const isOverRealnumLimit = (word: string) => Math.abs(parseInt(word)) > REALNUM_LIMIT;
