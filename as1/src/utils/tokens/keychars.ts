//Name of File : keychars.ts
//Purpose      : Tests to see if char is a keychar
//Summary      : Creates keychars from combining the separators and operators arrays. This comes in handy with getCleanInput

import { separators } from './separators';
import { operators } from './operators';

const keycharsArr = [...separators, ...operators];

export const isKeychar = (char: string) => keycharsArr.includes(char);

export const hasKeychar = (word: string) => keycharsArr.some((char) => word.includes(char));
