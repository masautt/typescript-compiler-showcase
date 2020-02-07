export const isKeyword = (word: string) => keywords.includes(word);
export const hasKeyword = (word: string) => keywords.some((keyword) => word.includes(keyword));

export const keywords: string[] = [
    'int',
    'float',
    'bool',
    'true',
    'false',
    'if',
    'else',
    'then',
    'endif',
    'while',
    'whileend',
    'do',
    'doend',
    'for',
    'forend',
    'input',
    'output',
    'and',
    'or',
    'not'
];
