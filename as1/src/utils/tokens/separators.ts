export const isSeparator = (char : string) => separators.includes(char)

export const hasSeparator = (word : string) => separators.some(separator => word.includes(separator));

export const separators : string[] = [
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