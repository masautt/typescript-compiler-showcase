export const isSeparator = (char : string) =>
    separators.includes(char)
    
const separators : string[] = [
    "'",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    ",",
    ".",
    ":",
    ";",
    " "
]