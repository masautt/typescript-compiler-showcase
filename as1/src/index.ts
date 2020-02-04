import { readFile } from 'fs';
import { getTokens } from './tokens/_exports';

readFile('./input.txt', 'utf8', (err, data) => {
    console.log(getTokens(data.split(' ')));
});
