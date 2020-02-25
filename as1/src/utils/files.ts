import { FILE_SIZE_LIMIT, INPUT_FILE_NAME, OUTPUT_FILE_NAME } from './env';
import { readFile, stat, Stats, writeFile, write } from 'fs';
import { printFileErrors } from "./lexer/output";
import { tokenize } from "./lexer/tokenize";
import { Token } from '../types/tokens';


//Check the file size, if it's less than the limit, then run the Lexer with tokenize( )
export const tokenizeFile = (path: string = INPUT_FILE_NAME) =>
    stat(path, (err: any, stats: Stats) =>
        err
            ? console.log(err)
            : stats.size >= FILE_SIZE_LIMIT
                ? printFileErrors()
                : readFile(path, 'utf8', (err: any, input: string) =>
                    err ? console.log(err) : saveTokens(OUTPUT_FILE_NAME, tokenize(input))
                )
    );

export const saveTokens = (path :string = OUTPUT_FILE_NAME, tokens : Token[]) => writeFile(path, JSON.stringify(tokens), (err) => {
    if (err) return console.log(err);
    console.log(`Tokens logged to ${path}`);
})