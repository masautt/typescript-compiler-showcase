export { isKeyword, hasKeyword } from './keywords';
export { isOperator } from './operators';
export { isSeparator, hasSeparator } from './separators';
export { isValidIdentifier } from './identifiers';
export { isRealnum } from './realnums';

import { separators } from "./separators";
import { keywords } from "./keywords";
import { operators } from "./operators";

const combineReserved = (values : string []) : string[] => {
    values.concat(separators);
    values.concat(keywords);
    values.concat(operators);
    return values;
}

const values : string[] = [];
export const reserved = combineReserved(values);


