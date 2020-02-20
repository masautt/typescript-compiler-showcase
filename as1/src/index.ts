import { FILE_SIZE_LIMIT_MSG, FILE_SIZE_LIMIT } from './utils/env';
import { readFile, stat, Stats } from 'fs';
import { tokenize } from './utils/lexer/_exports';

const startLexer = (path: string) =>
    stat(path, (err: any, stats: Stats) =>
        err
            ? console.log(err)
            : stats.size >= FILE_SIZE_LIMIT
            ? console.log(FILE_SIZE_LIMIT_MSG)
            : readFile(path, 'utf8', (err: any, input: string) =>
                  err ? console.log(err) : tokenize(input)
              )
    );

startLexer('./input.txt');
