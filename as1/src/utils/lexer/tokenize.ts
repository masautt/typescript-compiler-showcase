import {
    isValidIdentifier,
    isSeparator,
    isOperator,
    isKeyword,
    isRealnum
} from '../tokens/_exports';

import {reserved } from "../tokens/_exports";

import { Token } from '../../@types/tokens';

export const tokenize: any = (input: string) => {
    let values : string[] = input.split(" ");
    let tokens : Token[] = getTokens(values);
    let {hasUnknown, indexes} = getUnknowns(tokens);

    if (hasUnknown) {
        indexes.forEach((i : any) => {
            handleUnknown(tokens[i].value);
        })
    }

}


const getTokens = (values: string[]) : Token[] =>
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

const getUnknowns = (tokens :Token[]) => {
    let indexes : any = [];
    let hasUnknown = false;
    tokens.forEach((token, i) => {
        if (token.type === "unknown") {
            Number(indexes.push[i]); 
            hasUnknown = true;
        }
    })
    return {
        indexes,
        hasUnknown
    }
}

const handleUnknown = (value : string) => {

}