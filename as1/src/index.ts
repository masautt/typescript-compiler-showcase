import { readFile } from 'fs';
import { getTokens } from './tokens/main';

readFile('./input.txt', 'utf8', (err, data) => {
    console.log(getTokens(data.split(' ')));
});
