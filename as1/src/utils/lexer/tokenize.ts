import { Tokens } from '../tokens/_exports';

import { Token, TokenType } from '../../types/tokens';
import { getCleanInput } from './cleaners';
import { printTokenTable } from './output';

export const tokenize: any = (input: string) => {
    let tokens: Token[] = getTokens(getCleanInput(input));
    printTokenTable(tokens);
    return tokens;
};

export const getTokens = (input: string[]): Token[] =>
    input
        .filter((e) => e !== '')
        .map(
            (value: string): Token => {
                let type: TokenType = 'unknown';
                if (Tokens.isKeyword(value)) type = 'keyword';
                else if (Tokens.isSeparator(value)) type = 'separator';
                else if (Tokens.isOperator(value)) type = 'operator';
                else if (Tokens.isValidIdentifier(value)) type = 'identifier';
                else if (Tokens.isRealnum(value)) type = 'real';
                return { type: type, value: value };
            }
        );
