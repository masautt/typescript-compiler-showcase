export const isValidIdentifier = (word : string) => 
    RegExp('^[a-zA-Z][a-zA-Z$0-9\$]*$').test(word)
    