export { isKeyword, hasKeyword } from './keywords';
export { isOperator, hasOperator } from './operators';
export { isSeparator, hasSeparator } from './separators';
export { isValidIdentifier } from './identifiers';
export { isRealnum } from './realnums';
export { isKeychar, hasKeychar } from './keychars';

import { isKeyword, hasKeyword } from './keywords';
import { isOperator, hasOperator } from './operators';
import { isSeparator, hasSeparator } from './separators';
import { isValidIdentifier } from './identifiers';
import { isRealnum } from './realnums';
import { isKeychar, hasKeychar } from './keychars';

export const Tokens = {
    isKeyword,
    hasKeyword,
    isOperator,
    hasOperator,
    isSeparator,
    hasSeparator,
    isValidIdentifier,
    isRealnum,
    isKeychar,
    hasKeychar
};
