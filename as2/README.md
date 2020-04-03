# Assignment 2 - Parser

### Note

Due to the circumstances of COVID-19, this parser will only be satisfying the basic requirements outlined in [this clip](https://youtu.be/MGYPeguaZ7A) from the recent lecture. As much as we would have wanted to implement the full parser, this pandemic has limited our ability to physically meet and collaborate on this project.

### Minimal Requirements Statement from Lecture 03-17-20

"*As a matter of fact, if you can implement rules for a single declarative statement, and a rule for an assignment statement, and rules (plural), for the arithmetic expressions for addition, substraction, division, multiplication. You will satisfy the minimal points for project 2. Meaning you will get 80% for the grade, plus 10% for the documentation in implementing those rules that I just mentioned.*"

### Minimal Requirements

|Statment|Example|Input File|
|-|-|-|
|Simple Declarative|int a ;|declarative.txt|
|Simple Assignment|int a = 1 ;|assignment.txt|
|Arithmetic Addition|1 + 1|addition.txt|
|Arithmetic Subtraction|1 - 1|subtraction.txt|
|Arithmetic Division|1 / 1|division.txt|
|Arithmetic Multiplication|1 * 1|multiplication.txt|



## 1. Problem Statement

The goal for this TypeScript Parser is to print the tokens generated from `lexer.ts` in `as1` as well as the appropriate production rules from `rules.ts`.  

The rest of the problem statement is recap from `as1` :

The possible token classes are `identifiers`, `keywords`, `operators`, `separators`, and `realnums`.

|Token|Description|Example|
|-|-|-|
|`identifier`|A string that starts with a letter and can be followed by an alphanumeric character or a dollar sign ($)|`myId123$`|
|`keywords`|`int float bool true false if else thenendif while whileend do doend for forend input output and or not`|`int`|
|`operators`|`*` `+` `-` `=` `/` `>` `<` `%`|`/`|
|`separators`|`'` `(` `)` `{` `}` `[` `]` `.` `:` `;` ` `|`;`|
|`realnums`|Doubles or integers|`20.98`|
 
 
 The Lexer will not consider any comments encapsulated by an exclamation mark (`!`). If the Lexer fails to find a token class for a given input substring it will print an error message to the console and identify the missing token class as `unknown`.

 Here are the sample token outputs for the included operations in `./input`

#### (1) Addition

 input : 
 ```c++
 // addition.txt

  1 + 1 ;
 ```


output :

 ```js 
 // lexer() :

 [ 
    { type: 'real', value: '1' },
    { type: 'operator', value: '+' },
    { type: 'real', value: '1' },
    { type: 'separator', value: ';' } 
]
  ```

#### (2) Assignment

 input : 
```c++
//assignment.txt

 int a = 1 ;
```


 output :

 ```js
// lexer() :
[ 
    { type: 'keyword', value: 'int' },
    { type: 'identifier', value: 'a' },
    { type: 'operator', value: '=' },
    { type: 'real', value: '1' },
    { type: 'separator', value: ';' } 
]

 ```

#### (3) Declaration

 input : 
 ```c++
 // declaration.txt
 int a ;
 ```

 output : 
 ```js
 // lexer() :
 [ 
    { type: 'keyword', value: 'int' },
    { type: 'identifier', value: 'a' },
    { type: 'separator', value: ';' } 
]
 ```
#### (4) Division

  input : 
 ```c++
 // division.txt
 1 / 1;
 ```

 output : 
 ```js
 // lexer() :
 [ 
    { type: 'real', value: '1' },
    { type: 'operator', value: '/' },
    { type: 'real', value: '1' },
    { type: 'separator', value: ';' } 
]
 
 ```

#### (5) Multiplication

   input : 
 ```c++
 // multiplication.txt
 1 * 1;
 ```

 output : 
 ```js
 // lexer() :
 [ 
    { type: 'real', value: '1' },
    { type: 'operator', value: '*' },
    { type: 'real', value: '1' },
    { type: 'separator', value: ';' } 
]
 
 ```

#### (6) Subtraction

    input : 
 ```c++
 // subtraction.txt
 1 - 1;
 ```

 output : 
 ```js
 // lexer() :
 [ 
    { type: 'real', value: '1' },
    { type: 'operator', value: '-' },
    { type: 'real', value: '1' },
    { type: 'separator', value: ';' } 
]
 ```



## 2. Getting Started

**NOTE**: You can skip the installation process by running the lexer in a browser at [this repl.it link](https://repl.it/@msautter/typescript-compiler).

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

TypeScript is included as a dev dependency in each assignment's `package.json`. When you run `npm install` in a folder with a `package.json` file it will install all packages listed in that file.

To run the TypeScript Transpiler, you must have TypeScript installed globally on your machine with :

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
cd as2
npm install
npm start
```

1. `cd as2` will navigate you to the folder for assignment 1

2. `npm install` will add the following packages to your `/node_modules/` folder.

```json
  "devDependencies": {
    "@types/node": "^13.7.0",
    "@types/table": "^4.0.7",
    "typescript": "^3.7.5"
  },
  "dependencies": {
    "chalk": "^3.0.0",
    "table": "^5.4.6",
    "inquirer": "^7.1.0",
  }
```

3. `npm start` will run the TypeScript compiler with `tsc` which will transpile all the TypeScript files in `/src/` to JavaScript files in `/lib/`. Then, it will start the node application by running `node ./lib/index.js`

### Editing the Input to the Lexer

The lexer analyzes `./as2/input.txt` by default. You can manipulate this file to your liking or change the input file name (`INPUT_FILE_NAME`) in `./src/utils/env.ts`.

You can also change where the application is outputted with `OUTPUT_FILE_NAME`. This must be a `JSON file`.

## 3. Parser Design

![Code Walkthrough](./img/CodeWalkthrough.PNG 'Code Walkthrough')

### Data Structures

Just like the lexer, the parser does not rely on any special data structures. It walks through the token array generated in the lexer, and uses helper functions like `getPrevToken` and `getNextToken`.

### Algorithms

#### isRule( )

##### Purpose

Compares an array of tokens to rules defined in `rules.ts`.

```typescript
const isRule = (tokens: Token[], rule: Rule) : boolean => {
    if (tokens.length !== rule.values.length) return false;

    let isMatch : boolean = true;
    tokens.forEach((token: Token, i: number) => {
        isMatch = 
            rule.values[i].value 
                ? token.value !== rule.values[i].value
                    ? false
                    : isMatch
                : rule.values[i].type
                    ? token.type !== rule.values[i].type
                        ? false
                        : isMatch
                    : isMatch
    })
    return isMatch;
}
```
##### Steps

| #   | Code                                                     | Explanation                                                                                                 |
| --- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | `if (tokens.length !== rule.values.length) return false;`                      | If the number of tokens do not match the number of tokens in the rule, then return false                                                                            |
| 2   | `let isMatch : boolean = true;`              | Create a new boolean variable to keep track of matches                                                                                     |
| 3   | `tokens.forEach((token: Token, i: number) =>`   | Loop through each token in the passed in Token array
| 4   | `isMatch = rule.values[i].value ? token.value !== rule.values[i].value ? false : isMatch : rule.values[i].type ? token.type !== rule.values[i].type ? false : isMatch : isMatch`| If the values aren't the same, set isMatch to false if the types aren't the same either                       |
| 5   | `return isMatch;` | Return the boolean value determined in step 4|

`isRule` is called once for every rule in a `forEach` rule.

```typescript
rules.forEach((rule: Rule) => {
    if (isRule(restOfTokens, rule)) {
        console.log(`\t${rule.type}`);
        foundRule = true;
    }
})
```

#### isStatementList ( )

##### Purpose

This function checks in the array of tokens contains more than one statement.

```typescript
const isStatementList = (tokens : Token[]) : boolean => 
    tokens.map((token : Token) => token.value)
        .filter((value : string) => value === ";")
            .length > 1
```

##### Steps

| #   | Code                                                     | Explanation                                                                                                 |
| --- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | `const isStatementList = (tokens : Token[]) : boolean`                      |Create a function that takes an array of Tokens and returns a boolean value                                                                            |
| 2   | `tokens.map((token : Token) => token.value)`              |Reduce the array to tokens to just its values                                                                                     |
| 3   | `.filter((value : string) => value === ";")`   | Filter to array to tokens whose values are a semi-colon
| 4   | `.length > 1`| If the number of semi-colons are greater than 1 return true

`isStatementList( )` is called only on the first token in order to determine which rule should be printed.

```typescript
tokenIndex === 0 
    && console.log(isStatementList(tokens)
        ? `\t${rules[0].type}\n\t${rules[1].type}`
        : `\t${rules[1].type}`);
```



#### Helper Functions

```typescript
export const getNextRule = (ruleIndex : number) : Rule | undefined => 
    ruleIndex === rules.length 
        ? undefined
        : rules[ruleIndex + 1]
    
export const getPrevRule = (ruleIndex : number) : Rule | undefined => 
    ruleIndex === 0
        ? undefined
        : rules[ruleIndex - 1]

export const getNextToken =  (tokens : Token[], tokenIndex : number) : Token | undefined => 
    tokenIndex === tokens.length 
        ? undefined
        : tokens[tokenIndex + 1]

export const getPrevToken = (tokens : Token[], tokenIndex : number) : Token | undefined => 
    tokenIndex === 0
        ? undefined
        : tokens[tokenIndex - 1]
```

For example, `getPrevToken( )` is used to determine if the previous token's value was a semi-colon. If so then we print the rule statement.

```typescript
getPrevToken(tokens, tokenIndex)
    ?.value === ";" 
    && console.log(`${rules[1].type}`);
```


#### Limitations

##### Limited Examples
As we mentioned at the top of the documentation, we have limited our input to only 6 options : 
* `addition.txt`
* `assignment.txt`
* `declaration.txt`
* `division.txt`
* `multiplication.txt`
* `subtraction.txt`

We have removed the ability to add your own input through a file or the terminal. The parser can handle more than one statement at a time, but due to COVID-19, not all possibilities have been accounted for.


#### Shortcomings

As we mentioned previously, the major shortcoming with this parser is the limitation to only 5 examples. We thank professor Anthony Le for allowing us to get credit for this limited implementation.

