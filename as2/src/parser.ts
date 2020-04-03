import { Token, Rule } from "./types";
import { rules } from "./rules";
import chalk from "chalk";

export const parser = (tokens : Token[]) : void => 
    tokens.forEach((token: Token, tokenIndex) => {
        console.log(chalk.bold(`Token : ${token.type} \t Lexeme : ${token.value}`))

        tokenIndex === 0 
            && console.log(isStatementList(tokens)
                ? `\t${rules[0].type}\n\t${rules[1].type}`
                : `\t${rules[1].type}`);
                
        const prevToken = getPrevToken(tokens, tokenIndex);
        if (prevToken) {
            if (prevToken.value === ";") {
                console.log(`${rules[1].type}`);
            }
        }

        const restOfTokens = tokens.slice(tokenIndex, tokens.length);

        let foundRule : boolean = false;
        rules.forEach((rule: Rule) => {
            if (isRule(restOfTokens, rule)) {
                console.log(`\t${rule.type}`);
                foundRule = true;
            }
        })

        if (!foundRule) {
            rules.splice(2,5).forEach((rule : Rule) => {
                if (isRule([token], rule)) {
                    console.log(`\t${rule.type}`)
                }
            })
        } 
    })


const isRule = (tokens: Token[], rule: Rule) : boolean => {
    if (tokens.length !== rule.values.length) return false;

    let isMatch : boolean = true;
    tokens.forEach((token: Token, i: number) => {
        isMatch = 
            rule.values[i].value 
                ? token.value !== rule.values[i].value
                    ? false
                    : isMatch
                : rule.values[i].type
                    ? token.type !== rule.values[i].type
                        ? false
                        : isMatch
                    : isMatch
    })
    return isMatch;
}

const isStatementList = (tokens : Token[]) : boolean => 
    tokens.map((token : Token) => token.value)
        .filter((value : string) => value === ";")
            .length > 1

export const getNextRule = (ruleIndex : number) : Rule | undefined => 
    ruleIndex === rules.length 
        ? undefined
        : rules[ruleIndex + 1]
    
export const getPrevRule = (ruleIndex : number) : Rule | undefined => 
    ruleIndex === 0
        ? undefined
        : rules[ruleIndex - 1]

export const getNextToken =  (tokens : Token[], tokenIndex : number) : Token | undefined => 
    tokenIndex === tokens.length 
        ? undefined
        : tokens[tokenIndex + 1]

export const getPrevToken = (tokens : Token[], tokenIndex : number) : Token | undefined => 
    tokenIndex === 0
        ? undefined
        : tokens[tokenIndex - 1]
            
