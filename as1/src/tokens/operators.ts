export const isOperator = (char: string) => operators.includes(char);

export const hasOperator = (word: string) => word.split('').forEach((char) => {});
const operators: string[] = ['*', '+', '-', '=', '/', '>', '<', '%'];
