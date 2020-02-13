export const stripComments = (input: string) => input.replace(/(!(.*?)!)/, '').replace('!', ' ');
export const stripNewLines = (input: string) => input.replace(/(\r\n|\n|\r|\t)/gm, ' ');

export const stripAll = (input: string): string => stripComments(stripNewLines(input));
