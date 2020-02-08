import { Token } from '../../types/tokens';
import { isKeychar } from '../tokens/_exports';
import { getTokens } from './_exports';

export const hasUnknowns = (tokens: Token[]): boolean =>
    tokens.filter((t) => t.type === 'unknown').length !== 0;

export const getUnknowns = (tokens: Token[]): Token[] => {
    tokens.forEach((token, i) => {
        if (token.type === 'unknown') {
            tokens.splice(i, 1);
            getTokens(cleanUnknown(token)).forEach((unknownToken) => {
                tokens.splice(i, 0, unknownToken);
                i++;
            });
        }
    });
    return tokens;
};

const cleanUnknown = (token: Token): string[] => {
    let cleaned: string[] = [];
    token.value
        .split('')
        .forEach((c) => (isKeychar(c) ? cleaned.push(' ', c, ' ') : cleaned.push(c)));
    return cleaned
        .join('')
        .split(' ')
        .filter((e) => e !== '');
};
