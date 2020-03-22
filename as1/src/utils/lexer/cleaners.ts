//Name of File : cleaners.ts
//Purpose      : Responsible for formatting input
//Summary      : getCleanInput will take in a string and return a string array, after it's stripped all unecessary code

import { removeAll } from './removers';

import { isKeychar } from './../tokens/_exports';

export const getCleanInput = (input: string): string[] => {
    const newInput = removeAll(input);
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
    return cleanInput
        .join('')
        .split(' ')
        .filter((e) => e !== '');
};
