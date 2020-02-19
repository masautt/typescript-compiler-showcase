export const removeComments = (input: string) => input.replace(/(!(.*?)!)/g, ' ');
export const removeNewLines = (input: string) => input.replace(/(\r\n|\n|\r|\t)/gm, ' ');

export const removeAll = (input: string): string => removeComments(removeNewLines(input));
