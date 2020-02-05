export const isOperator = (char: string) => operators.includes(char);

export const hasOperator = (word : string) => operators.some(operator => word.includes(operator));

const operators: string[] = ['*', '+', '-', '=', '/', '>', '<', '%'];
