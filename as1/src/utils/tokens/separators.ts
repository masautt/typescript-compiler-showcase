//Name of File : separators.ts
//Purpose      : Tests to see if char is an separator
//Summary      : Houses a string array of separators and provides methods to test if char is an separator

export const isSeparator = (char: string) => separators.includes(char);

export const hasSeparator = (word: string) =>
    separators.some((separator) => word.includes(separator));

export const separators: string[] = ["'", '(', ')', '{', '}', '[', ']', ',', '.', ':', ';', ' '];

export const isSeparatorRegex = (char: string) =>
    RegExp(`('|\(|\)|{||}|\[|\]|,|.|\:|;| )$`).test(char);
