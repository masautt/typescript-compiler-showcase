export { isKeyword } from './keywords';
export { isOperator } from './operators';
export { isSeparator } from './separators';
export { isValidIdentifier } from './identifiers';
export { isReal } from './real';

import { isValidIdentifier } from './identifiers';
import { isSeparator } from './separators';
import { isOperator } from './operators';
import { isKeyword } from './keywords';
import { isReal } from './real';

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
            if (isReal(value)) {
                newToken.type = 'real';
                return newToken;
            }
            return newToken;
        }
    );
