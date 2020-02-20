//Name of File : output.ts
//Purpose      : Prints the token table
//Summary      : Converts the array of Token Objects to a 2 dimensional array to be printed in the console by this npm package https://www.npmjs.com/package/table

import { table } from 'table';

import { Token } from '../../types/tokens';

export const printTokenTable = (tokens: Token[]) => {
    let output = [['Token', 'Lexeme']];
    tokens.forEach((token) => {
        output.push([token.type, token.value]);
    });
    console.log(table(output));
};
