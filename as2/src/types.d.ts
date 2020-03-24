//Types
export interface Token { value: string; type: TokenType; }
export type TokenType = 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';