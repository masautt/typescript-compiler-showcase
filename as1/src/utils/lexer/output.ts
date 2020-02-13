import { table } from 'table';

import { Token } from '../../types/tokens';

export const printTokenTable = (tokens: Token[]) => {
    let output = [['Token', 'Lexeme']];
    tokens.forEach((token) => {
        output.push([token.type, token.value]);
    });
    console.log(table(output));
};
