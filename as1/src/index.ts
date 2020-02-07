import { readFile } from 'fs';
import { tokenize } from './utils/lexer/_exports';

readFile('./input.txt', 'utf8', (err, input) => console.log(tokenize(input)));
