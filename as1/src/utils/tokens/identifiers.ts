//Name of File : identifiers.ts
//Purpose      : Tests if the word is a valid identifier
//Summary      : Uses a regular expression to make sure the word starts with a letter and then only uses alphanumeric characters or a dollar sign for the rest of its length

export const isValidIdentifier = (word: string) => RegExp('^[a-zA-Z][a-zA-Z0-9$]*$').test(word);
