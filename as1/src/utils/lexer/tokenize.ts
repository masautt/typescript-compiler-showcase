import { isValidIdentifier, isSeparator, isOperator, isKeyword, isRealnum } from "../tokens/_exports";

import { Token } from '../../@types/tokens';

export const tokenize: any = (values: []) =>
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
            if (isRealnum(value)) {
                newToken.type = 'real';
                return newToken;
            }
            return newToken;
        }
    );
