# Assignment 1 – Lexical Analyzer

## Getting Started

**Note**: make sure you have installed all necessary tools in the README.md before running the following :

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

3. `npm start` will run the TypeScript compiler which will transpile all the TypeScript files in `/src/` to `/lib/` and then start the node application by running node on `./lib/index.js`

## Testing

All tests are run through Jest, an npm testing library developed by Facebook.
