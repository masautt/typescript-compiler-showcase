# Assignment 1 – Lexical Analyzer

**NOTE**: This is a converted markdown-to-pdf file. For proper formatting, please see the [original markdown file](https://github.com/masautt/typescript-compiler/blob/master/as1/README.md).

## 1. Problem Statement

> The goal for this TypeScript Lexer is to identify all tokens in `./input.txt` and print them as a table to the console. The possible token classes are `identifiers`, `keywords`, `operators`, `separators`, and `realnums`. The Lexer will not consider any comments encapsulated by and exclamation mark (`!`).
> If the Lexer fails to find a token class for a given input substring it will print an error message to the console and identify the missing token class as `unknown`.

### Examples

### Ex. 1 - input.txt

#### Input

`./input.txt`

```
! Find largest value between two numbers!
int num1, num2, large$
if(num1 > num2)
{
	large = num1$;
}
else
{
	large = num2$;
}
```

#### Output

`terminal`

> | Token      | Lexeme  |
> | ---------- | ------- |
> | keyword    | int     |
> | identifier | num1    |
> | separator  | ,       |
> | identifier | large\$ |
> | keyword    | if      |
> | separator  | (       |
> | identifier | num1    |
> | operator   | >       |
> | identifier | num2    |
> | separator  | )       |
> | separator  | {       |
> | identifier | num1\$  |
> | separator  | ;       |
> | separator  | }       |
> | keyword    | else    |
> | separator  | {       |
> | identifier | large   |
> | operator   | =       |
> | identifier | num2\$  |
> | separator  | ;       |
> | separator  | }       |

### Ex 2 - input2.txt

#### Input

`./input2.txt`

```
! Declare and assign a number !
int number;
number = 9;
```

#### Output

`terminal`

> | Token      | Lexeme |
> | ---------- | ------ |
> | keyword    | int    |
> | identifier | number |
> | separator  | ;      |
> | identifier | number |
> | operator   | =      |
> | real       | 9      |
> | separator  | ;      |

### Ex 3 - input3.txt

#### Input

`./input3.txt`

```
while (fahr < upper) a = 23.00 whileend
```

#### Output

`terminal`

> | Token      | Lexeme   |
> | ---------- | -------- |
> | keyword    | while    |
> | separator  | (        |
> | identifier | fahr     |
> | operator   | <        |
> | identifier | upper    |
> | operator   | =        |
> | real       | 23.00    |
> | keyword    | whileend |

### Implementation

#### Why JavaScript?

This semester, Professor Le instructed us to use whichever language we feel most comfortable with. In our case, that's JavaScript. The syntax is relatively easy to use and its asynchronous syntax might come in handy with Assignments 2 and 3.

With the massive adoption of the web, JavaScript has become the most sought-after programming language. It has proven to have the flexibility to tackle any project. It may not be as efficient as C, but it definetely can run as a compiler.

#### Why TypeScript?

JavaScript was meant for the front-end. It started as a scripting language to manipulate the DOM and update HTML and CSS in the browser. In 2009, a Software Developer named Ryan Dahl, saw the potential in JavaScript and ported its runtime engine server-side called Node.js.

Node allowed front-end developers to use the syntax they were used to in the backend. This worked for small web hosting, but as applications grew in complexity, developers would soon realize this hacky language wouldn't scale as well as other languages.

Microsoft saw this as an issue as well when they began developing their [Visual Studio Code editor](https://code.visualstudio.com/) in JavaScript. The code-base became so large that it was difficult to determine where runtime errors were originating from.

In 2012, Microsoft announced its efforts to develop a superset of JavaScript that allowed for statically typed variables as well as optional implementations of traditional object-oriented fundamentals.

Facebook also released their own version of a statically typed JavaScript superset, Flow, in 2014, but as you can see from [npm trends](https://www.npmtrends.com/flow-bin-vs-typescript), it's clear TypeScript is king.

![Flow vs. TypeScript](https://i.imgur.com/pwCzygL.png)

## 2. Getting Started

**NOTE**: You can skip the installation process by running the lexer in a browser at [this repl.it link](https://repl.it/github/masautt/typescript-compiler).

### Requirements

#### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript Engine. It allows JavaScript to run outside of the browser.

| OS      | Link                                                   |
| ------- | ------------------------------------------------------ |
| Windows | https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi |
| MacOS   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.pkg     |
| Linux   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.tar.gz  |

#### TypeScript

TypeScript is a superset of JavaScript created by Microsoft. It adds static types and traditional object oriented programming fundamentals to JavaScript.

All code is written in TypeScript in the `src` folder and then transpiled to JavaScript in the `lib` folder using the `tsc` (TypeScript compiler) command.

TypeScript can be installed using [NPM](https://www.npmjs.com/), the Node Package Manager. NPM is installed by default with every Node.js installation.

TypeScript is included as a dev dependency in each assignment's `package.json`. When you run `npm install` in a a folder with a `package.json` file it will install all packages listed in that file.

To run the TypeScript Transpiler, you must have TypeScritp installed globally on your machine with :

```bash
npm install -g typescript
```

**Note**: make sure you have Node.js and npm installed at this point for the above command to work

### Cloning the Repo

```bash
git clone https://github.com/masautt/typescript-compiler
cd typescript-compiler
```

### Running the Lexer

```bash
cd as1
npm install
npm start
```

1. `cd as1` will navigate you to the folder for assignment 1

2. `npm install` will add the following packages to your `/node_modules/` folder.

```json
  "devDependencies": {
    "@types/jest": "^25.1.1",
    "@types/node": "^13.7.0",
    "@types/table": "^4.0.7",
    "jest": "^25.1.0",
    "ts-jest": "^25.1.0",
    "typescript": "^3.7.5"
  },
  "dependencies": {
    "table": "^5.4.6"
  }
```

3. `npm start` will run the TypeScript compiler with `tsc` which will transpile all the TypeScript files in `/src/` to JavaScript files in `/lib/`. Then, it will start the node application by running `node ./lib/index.js`

### Editing the Input to the Lexer

The lexer analyzes `./as1/input.txt` by default. You can manipulate this file to your liking or change the input file name (`FILE_NAME`) in `./src/utils/env.ts`.

### Testing

All tests are run through [Jest](https://jestjs.io/), an npm testing library developed by Facebook.

Jest is installed when you run `npm install` because it's included in `package.json`.

Run `npm test` to run all tests in `./as1/src/tests`.

## 3. Lexer Design

### Code Overview

![Code Overview](./img/CodeOverview.PNG 'Cove Overview')

### Code Walkthrough

![Code Walkthrough](./img/CodeWalkthrough.PNG 'Code Walkthrough')

### Final State Machines for Regex Tests

We mostly relied on JavaScript's built in methods for identifying token classes, but we have included some alternative Regular Expressions as well as their representative finite state diagrams.

#### Finding `Realnums` Using Built in Methods

For `realnums`, we checked the input string with the `isNaN` function. `NaN` is a JavaScript global property for representing values that are Not-A-Number.

```typescript
//  ./src/utils/tokens/realnums.ts
export const isRealnum = (word: string) => word !== '' && !isNaN(+word);
```

If the string is not empty and the `isNaN` function returns `false`, then it is a `realnum`.

#### Finding `Realnums` Using Regex

The following Regex has the same functionality as the `isRealnum` function above.

```typescript
//  ./src/utils/tokens/realnums.ts
export const isRealnumRegex = (word: string) => RegExp('^[0-9]+([\\,\\.][0-9]+)?$').test(word);
```

![isRealnum FSM](./img/isRealnumFSM.PNG 'isRealnumFSM')

#### Finding `Identifiers` Using Regex

For valid `identifiers`, it was easier to use Regex than any built in JavaScript method.

```typescript
//  ./src/utils/tokens/identifiers.ts
export const isValidIdentifier = (word: string) => RegExp('^[a-zA-Z][a-zA-Z0-9$]*$').test(word);
```

![isValidIdentifier FSM](./img/isValidIdentifierFSM.PNG 'isValidIdentifierFSM')

#### Finding `Keywords` Using Array Methods

For finding `keywords`, we found it easier to identify all possible `keywords` in an array and then use JavaScript's Array Prototype `includes` to see if that string is in the predefined array.

```typescript
//  ./src/utils/tokens/keywords.ts
export const keywords: string[] = [
    'int',
    'float',
    'bool',
    'true',
    'false',
    'if',
    'else',
    'then',
    'endif',
    'while',
    'whileend',
    'do',
    'doend',
    'for',
    'forend',
    'input',
    'output',
    'and',
    'or',
    'not'
];

export const isKeyword = (word: string) => keywords.includes(word);
```

#### Finding `Keywords` Using Regex

The following Regex has the same functionality as the `isKeyword` function above.

```typescript
//  ./src/utils/tokens/keywords.ts
export const isKeywordRegex = (word: string) =>
    RegExp(
        '(int|float|bool|true|false|if|else|then|endif|while|whileend|do|doend|for|forend|input|output|and|or|not)$'
    ).test(word);
```

![isKeyword FSM](./img/isKeywordFSM.PNG 'isKeywordFSM')

#### Finding `Operators` Using Array Methods

For finding `operators`, we found it easier to identify all possible `operators` in an array and then use JavaScript's Array Prototype `includes` to see if that string is in the predefined array.

```typescript
//  ./src/utils/tokens/operators.ts
export const operators: string[] = ['*', '+', '-', '=', '/', '>', '<', '%'];

export const isOperator = (char: string) => operators.includes(char);
```

#### Finding `Operators` Using Regex

The following Regex has the same functionality as the `isOperator` function above.

```typescript
//  ./src/utils/tokens/operators.ts
export const isOperatorRegex = (char: string) => RegExp('(*|+|-|=|/|>|<|%)$').test(char);
```

![isOperator FSM](./img/isOperatorFSM.PNG 'isOperatorFSM')

#### Finding `Separators` Using Array Methods

For finding `separators`, we found it easier to identify all possible `separators` in an array and then use JavaScripts Array Prototype `includes` to see if that string is in the predefined array.

```typescript
//  ./src/utils/tokens/separators.ts

export const separators: string[] = ["'", '(', ')', '{', '}', '[', ']', ',', '.', ':', ';', ' '];
export const isSeparator = (char: string) => separators.includes(char);
```

#### Finding `Separators` Using Regex

The following Regex has the same functionality as the `isSeparator` function above.

```typescript
//  ./src/utils/tokens/separators.ts
export const isSeparatorRegex = (char: string) =>
    RegExp(`('|\(|\)|{||}|\[|\]|,|.|\:|;| )$`).test(char);
```

![isSeparator FSM](./img/isSeparatorFSM.PNG 'isSeparatorFSM')

#### Removing `Comments` Using Regex

The following Regex will replace any substring of the input string that's wrapped in exclamation marks (`!!`) with a blank space (`_`).

```typescript
// ./src/utils/lexer/removers.ts
export const removeComments = (input: string) => input.replace(/(!(.*?)!)/g, ' ');
```

![removeComments FSM](./img/removeCommentsFSM.PNG 'removeCommentsFSM')

#### Removing `New Lines` Using Regex

The following Regex will replace any substring of the input string that contains new lines (`\n`), tabs (`\t`), and carriage returns (`\r`) with a blank space (`_`).

```typescript
export const removeNewLines = (input: string) => input.replace(/(\r\n|\n|\r|\t)/gm, ' ');
```

![removeNewLines FSM](./img/removeNewLinesFSM.PNG 'removeNewLinesFSM')

### Data Structures

As for data structures, the lexer relies on the default JavaScript arrays. No complex data structures are used at the moment.

We might achieve faster runtimes with linked lists, but it's rather difficult to implement them in JavaScript, given the lack of pointers and deference operators.

### Algorithms

The two primary algorithms are `getCleanInput( )` in `./src/utils/lexer/cleaners.ts` and `getTokens( )` in `./src/utils/lexer/tokenize.ts`.

#### getCleanInput( )

##### Purpose

Removes all unnecessary code (comments, newlines, tabs, etc.) and converts the input string into an input string array separated by spaces.

```typescript
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
```

##### Steps

| #   | Code                                                     | Explanation                                                                                                 |
| --- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | `const newInput = removeAll(input)`                      | removes all comments / newlines                                                                             |
| 2   | `newInput.split('').forEach((char: string)`              | loops through newInput                                                                                      |
| 3   | `if (isKeychar(char) && char !== '.' && char !== ' ')`   | if the curr char is a keychar and not a `.` in a realnum, pad it with spaces                                |
| 4   | `else cleanInput.push(char)`                             | if not keychar then add it to the new array without padding                                                 |
| 5   | `cleanInput.join('').split(' ').filter((e) => e !== '')` | make the array into a string, split it back into an array based off spaces and then remove any extra spaces |

#### getTokens( )

#### Purpose

Loops through the input string array generated by `getCleanInput` and evaluates the token type of each word. Generates an object array with the value and token type as keys.

```typescript
export const getTokens = (input: string[]): Token[] =>
    input
        .filter((e) => e !== '')
        .map(
            (value: string): Token => {
                let type: TokenType = 'unknown';
                if (Tokens.isKeyword(value)) type = 'keyword';
                else if (Tokens.isSeparator(value)) type = 'separator';
                else if (Tokens.isOperator(value)) type = 'operator';
                else if (Tokens.isValidIdentifier(value)) type = 'identifier';
                else if (Tokens.isRealnum(value)) type = 'real';
                return { type: type, value: value };
            }
        );
```

##### Steps

| #   | Code                                                             | Explanation                                                                                |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | `input.filter((e) => e !== '')`                                  | remove any blanks                                                                          |
| 2   | `.map((value: string): Token => {`                               | loops through the input array                                                              |
| 3   | `let type: TokenType = 'unknown';`                               | create a new tokenType and set it to `undefined`                                           |
| 4   | `if (Tokens.isKeyword(value)) type = 'keyword';`                 | if the word is a part of the keywords array in `keywords.ts`, mark it as a `keyword`       |
| 5   | `else if (Tokens.isSeparator(value)) type = 'separator';`        | if the word is a part of the separators array in `separators.ts`, mark it as a `separator` |
| 6   | `else if (Tokens.isOperator(value)) type = 'operator';`          | if the word is a part of the operators array in `operators.ts`, mark it as a `operator`    |
| 7   | `else if (Tokens.isValidIdentifier(value)) type = 'identifier';` | if the word passes the regex test in `identifiers.ts`, mark it as an `identifier`          |
| 8   | `else if (Tokens.isRealnum(value)) type = 'real';`               | if the word passes the regex test in `realnums.ts`, mark it as a `real`                    |
| 8   | `return { type: type, value: value };`                           | return the new token                                                                       |

## 4. Limitations

To avoid any slowdowns with I/O, there is a `5KB` file size limit on input.txt. If the `stats.size` value is larger than the set `FILE_SIZE_LIMIT` in `./src/utils/env`, the lexer will not run on the file.

### Implementation

`./src/index.ts`

```typescript
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
```

### Other possible limitations

We could have checked for the number of new lines in `input.txt` but the lexer removes them anyways.

We chose not to put limitations on the size of integers and length of identifiers until the next assignment.

## 5. Shortcomings

We have several unit and integration tests in the `./src/tests` folder. If our lexer fails any requirements, it's probably not being tested for. If you find any missing requirements, we will be sure to test for them again in Assignment 2.
