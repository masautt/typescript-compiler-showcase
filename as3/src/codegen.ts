interface Token { value: string; type: TokenType; }

type TokenType = 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';
const TokenTypes = ['keyword' , 'separator' , 'identifier' , 'operator' , 'unknown' , 'real'];

interface Identifier { value: string; type: string; address : number }
type IdentifierType = 'int' | 'bool' | 'float';
const IdentifierTypes = ['int' , 'bool' , 'float'];

let STARTING_IDENTIFIER_ADDR : number = 2000;

export const gencode = (tokens : Token[]) => {

    const identifiers : Identifier[] = getIdentifiers(tokens);


    // Now we need to walk through the tokens again, this time looking for values being initialized 
    let opNum = 1;
    tokens.forEach((token : Token, i : number) => {
        if (token.value == "=") {
            if (tokens[i+1].type == "real") {
                console.log(`${opNum++}\tPUSHI\t${tokens[i+1].value}`)
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

