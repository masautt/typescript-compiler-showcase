import { Token } from "./types";

export const parser = (tokens : Token[]) => {

}

const getRule = (tokenType : string, tokenValue : string) => {
    switch(tokenType) {
        case "keyword" :
            switch(tokenValue) {
                case "int" :
                case "float" :
                case "bool" :
                    break;
            }
            break;
        case "operator" :
            switch(tokenValue) {
                case "*" :
                    break;
                case "/" :
                    break;
                case "+" :
                    break;
                case "-" :
                    break;
            }
            break;
        case "identifier" :
            break;
        case "real" :
            break;
    }
}