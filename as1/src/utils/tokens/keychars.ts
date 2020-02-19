import { separators } from './separators';
import { operators } from './operators';

const keycharsArr = [...separators, ...operators];

export const isKeychar = (char: string) => keycharsArr.includes(char);

export const hasKeychar = (word: string) => keycharsArr.some((char) => word.includes(char));
