interface Token { value: string; type: TokenType; }

type TokenType = 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';
const TokenTypes = ['keyword' , 'separator' , 'identifier' , 'operator' , 'unknown' , 'real'];

interface Identifier { value: string; type: string; address : number }
type IdentifierType = 'int' | 'bool' | 'float';
const IdentifierTypes = ['int' , 'bool' , 'float'];

import { Stack } from "./stack";

let STARTING_IDENTIFIER_ADDR : number = 2000;

export const gencode = (tokens : Token[]) => {

    const identifiers : Identifier[] = getIdentifiers(tokens);

    const identifierStack = new Stack(identifiers);
    const tokensStack = new Stack(tokens);

    let opNum = 1;
    tokens.forEach((token : Token, i : number) => {
        if (token.value === "=") {
            if (tokens[i+1].type === "real") {
                console.log(`${opNum++}\tPUSHI\t${tokens[i+1].value}`)
                if (tokens[i-1].type === "identifier") {
                    console.log(`${opNum++}\tPOPM\t${identifiers.find((identifier : Identifier) => identifier.value === tokens[i-1].value)?.address}`)
                }
            }
            if (tokens[i+1].type === "identifier") {
                console.log(`${opNum++}\tPUSHM\t${identifiers.find((identifier : Identifier) => identifier.value === tokens[i+1].value)?.address}`)

                if (tokens[i+2].type === "operator") {
                    if (tokens[i+3].type === "identifier") {
                        console.log(`${opNum++}\tPUSHM\t${identifiers.find((identifier : Identifier) => identifier.value === tokens[i+3].value)?.address}`)
                    }
                    switch(tokens[i+2].value) {
                        case "+" :
                            console.log(`${opNum++}\tADD`);
                            break;
                        case "-":
                            console.log(`${opNum++}\tSUB`);
                            break;
                        case "*" :
                            console.log(`${opNum++}\tMUL`);
                            break;
                        case "/" :
                            console.log(`${opNum++}\tDIV`);
                            break;
                    }
                }
                if (tokens[i-1].type === "identifier") {
                    console.log(`${opNum++}\tPOPM\t${identifiers.find((identifier : Identifier) => identifier.value === tokens[i-1].value)?.address}`)
                }
            }
        }
    })

    console.log("Symbol Table")
    console.log("Identifier\tMemoryLocation\t\tType");
    identifiers.forEach((i : Identifier) => console.log(`${i.value}\t\t${i.address}\t\t\t${i.type}`))
}



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

