//Types
export interface Token { value: string; type: TokenType; }
export type TokenType = 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';
export const TokenTypes = ['keyword' , 'separator' , 'identifier' , 'operator' , 'unknown' , 'real'];


export type IdentifierType = 'int' | 'bool' | 'float';
export const IdentifierTypes = ['int' , 'bool' , 'float'];


export interface Identifier { value: string; type: string; address : number }

export interface Rule { type : string; values : any}