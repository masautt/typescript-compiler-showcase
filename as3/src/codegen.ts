



import { Stack } from "./stack";
import { Token, TokenType, Identifier, IdentifierTypes } from "./types";



export const gencode = (tokens : Token[]) => {

    const getIdentifiers = (tokens : Token[]) : Identifier[] => {
        const identifiers : Identifier[] = []
        tokens.forEach((token : Token, i : number) => {
            if (token.type == "identifier") {
                if (IdentifierTypes.includes(tokens[i-1].value)) {
                    identifiers.push({
                        value : token.value,
                        type : tokens[i-1].value,
                        address : STARTING_IDENTIFIER_ADDR++
                    })
                }
            }
        })
        return identifiers;
    }

    const printASM = (opNum : number, instruction : string, address? : number | string) => console.log(`${opNum}\t${instruction}\t${address?address:""}`);
    
    
    const getIdAddr = (i : number) => identifiers.find((identifier : Identifier) => identifier.value === tokens[i].value)?.address

    let STARTING_IDENTIFIER_ADDR : number = 2000;

    const identifiers : Identifier[] = getIdentifiers(tokens);
    const identifierStack = new Stack(identifiers);
    const tokensStack = new Stack(tokens);

    let opNum = 1;
    tokens.forEach((token : Token, i : number) => {
        if (token.value === "=") {
            if (tokens[i+1].type === "real") {
                printASM(opNum++, "PUSHI", tokens[i+1].value);
                if (tokens[i-1].type === "identifier") {
                    printASM(opNum++, "POPM", getIdAddr(i-1));
                }
            }
            if (tokens[i+1].type === "identifier") {
                printASM(opNum++, "PUSHM", getIdAddr(i+1));

                if (tokens[i+2].type === "operator") {
                    if (tokens[i+3].type === "identifier") {
                        printASM(opNum++, "PUSHM", getIdAddr(i+3));
                    }
                    switch(tokens[i+2].value) {
                        case "+" :
                            printASM(opNum++,"ADD")
                            break;
                        case "-":
                            printASM(opNum++,"SUB")
                            break;
                        case "*" :
                            printASM(opNum++,"MUL")
                            break;
                        case "/" :
                            printASM(opNum++,"DIV")
                            break;
                    }
                }
                if (tokens[i-1].type === "identifier") {
                    printASM(opNum++,"POPM", getIdAddr(i-1));
                }
            }
        }
    })

    console.log("\nSymbol Table")
    console.log("Identifier\tMemoryLocation\t\tType");
    identifiers.forEach((i : Identifier) => console.log(`${i.value}\t\t${i.address}\t\t\t${i.type}`))
}





