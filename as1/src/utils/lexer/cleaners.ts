import { stripAll } from './strippers';

import { isKeychar } from './../tokens/_exports';

export const getCleanInput = (input: string): string[] => {
    const newInput = stripAll(input);
    let cleanInput: string[] = [];
    newInput.split('').forEach((char: string) => {
        if (isKeychar(char) && char !== '.' && char !== ' ') {
            cleanInput.push(' ');
            cleanInput.push(char);
            cleanInput.push(' ');
        } else {
            cleanInput.push(char);
        }
    });
    return cleanInput.join('').split(' ');
};
