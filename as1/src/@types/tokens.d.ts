export interface Token {
    value: string;
    type: 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';
}
