import { Tokens } from '../tokens/_exports';

import { hasUnknowns, getUnknowns } from './_exports';

import { Token, TokenType } from '../../@types/tokens';

export const tokenize: any = (input: string) => {
    let tokens: Token[] = getTokens(input.split(' '));
    if (hasUnknowns(tokens)) tokens = getUnknowns(tokens);
    return tokens;
};

export const getTokens = (values: string[]): Token[] =>
    values.map(
        (value: string): Token => {
            let type: TokenType = 'unknown';
            if (Tokens.isKeyword(value)) type = 'keyword';
            if (Tokens.isSeparator(value)) type = 'separator';
            if (Tokens.isOperator(value)) type = 'operator';
            if (Tokens.isValidIdentifier(value)) type = 'identifier';
            if (Tokens.isRealnum(value)) type = 'real';
            return {
                type: type,
                value: value
            };
        }
    );
