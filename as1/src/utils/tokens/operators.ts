//Name of File : operators.ts
//Purpose      : Tests to see if char is an operator
//Summary      : Houses a string array of operators and provides methods to test if char is an operator

export const isOperator = (char: string) => operators.includes(char);

export const hasOperator = (word: string) => operators.some((operator) => word.includes(operator));

export const operators: string[] = ['*', '+', '-', '=', '/', '>', '<', '%'];

export const isOperatorRegex = (char: string) => RegExp('(*|+|-|=|/|>|<|%)$').test(char);
