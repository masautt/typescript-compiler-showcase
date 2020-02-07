import {
    isValidIdentifier,
    isSeparator,
    isOperator,
    isKeyword,
    isRealnum
} from '../tokens/_exports';

import { Token } from '../../@types/tokens';

export const tokenize: any = (input: string) => {
    let values: string[] = input.split(' ');
    let tokens: Token[] = getTokens(values);
    let unknowns = getUnknowns(tokens);
    return tokens;
};

const getTokens = (values: string[]): Token[] =>
    values.map(
        (value: string): Token => {
            let newToken: Token = {
                value: value,
                type: 'unknown'
            };
            if (isKeyword(value)) {
                newToken.type = 'keyword';
                return newToken;
            }
            if (isSeparator(value)) {
                newToken.type = 'separator';
                return newToken;
            }
            if (isOperator(value)) {
                newToken.type = 'operator';
                return newToken;
            }
            if (isValidIdentifier(value)) {
                newToken.type = 'identifier';
                return newToken;
            }
            if (isRealnum(value)) {
                newToken.type = 'real';
                return newToken;
            }
            return newToken;
        }
    );

const getUnknowns = (tokens: Token[]) => {
    let foundUnknowns: any = [];
    let isFound = false;
    tokens.forEach((token, index) => {
        if (token.type === 'unknown') {
            foundUnknowns.push({
                value: token.value,
                type: token.type,
                index: index
            });
        }
    });
    return {
        foundUnknowns,
        isFound
    };
};
