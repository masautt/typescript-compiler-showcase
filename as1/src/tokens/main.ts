export { isKeyword } from './data/keywords';
export { isOperator } from './data/operators';
export { isSeparator } from './data/separators';
export { isValidIdentifier } from './data/identifiers';

import { isValidIdentifier } from './data/identifiers';
import { isSeparator } from './data/separators';
import { isOperator } from './data/operators';
import { isKeyword } from './data/keywords';

import { Token } from '../@types/tokens';

export const getTokens: any = (values: []) =>
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
                newToken.type = 'identifer';
                return newToken;
            }
            return newToken;
        }
    );
