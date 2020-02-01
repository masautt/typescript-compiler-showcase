export interface Token {
    value: string;
    type: TokenType;
}

export enum TokenType {
    Keyword,
    Separator,
    Identifier,
    Operator,
    Real
}
