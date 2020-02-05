export const isSeparator = (char : string) => separators.includes(char)

export const hasSeparator = (word : string) => separators.some(separator => word.includes(separator));

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