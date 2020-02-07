"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var _exports_1 = require("./utils/lexer/_exports");
fs_1.readFile('./input.txt', 'utf8', function (err, input) { return console.log(_exports_1.tokenize(input)); });
