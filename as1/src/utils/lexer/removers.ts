//Name of File : removers.ts
//Purpose      : Removes all unecessary code
//Summary      : Uses regular expressions to parse through the input string and remove new lines, tabs, and comments

export const removeComments = (input: string) => input.replace(/(!(.*?)!)/g, ' ');
export const removeNewLines = (input: string) => input.replace(/(\r\n|\n|\r|\t)/gm, ' ');

export const removeAll = (input: string): string => removeComments(removeNewLines(input));
