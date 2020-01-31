export const isKeyword = (word : string) => 
    keywords.includes(word)

const keywords : string[] = [
    "int",
    "float",
    "bool",
    "true",
    "false",
    "if",
    "else",
    "then",
    "endif",
    "while",
    "whileend",
    "do",
    "doend",
    "for",
    "foreend",
    "input",
    "output",
    "and",
    "or",
    "not"
]