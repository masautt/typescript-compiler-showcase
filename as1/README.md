# Assignment 1 – Lexical Analyzer

## 1. Problem Statement

## 2. Getting Started

This project requires the following :

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/)
3. [TypeScript](https://www.typescriptlang.org/)

### Installing Tools

#### Git

Git is a free and open source distributed version control system. It is used to download the code for this project. You are most likely viewing this document on Github, the most popular website for hosting git projects.

| OS      | Link                               |
| ------- | ---------------------------------- |
| Windows | https://git-scm.com/download/win   |
| MacOS   | https://git-scm.com/download/mac   |
| Linux   | https://git-scm.com/download/linux |

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

If you wish to install TypeScript globally on your machine you can use the following :

```bash
npm install -g typescript
```

**Note**: make sure you have Node.js and npm installed at this point for the above command to work!

### Cloning the Repo

```bash
git clone https://github.com/masautt/typescript-compiler
cd typescript-compiler
```

### Running the Compiler

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

The lexer analyzes `./as1/input.txt`. You can manipulate this file to your liking.

### Testing

All tests are run through [Jest](https://jestjs.io/), an npm testing library developed by Facebook.

Jest is installed when you run `npm install` because it's included in `package.json`.

Run `npm test` to run all tests in `./as1/src/tests`.

# 3. Program Design
