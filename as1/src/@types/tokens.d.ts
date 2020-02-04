export interface Token {
    value: string;
    type: 'keyword' | 'separator' | 'identifer' | 'operator' | 'unknown' | 'real';
}
