"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var _exports_1 = require("./tokens/_exports");
fs_1.readFile('./input.txt', 'utf8', function (err, data) {
    console.log(_exports_1.getTokens(data.split(' ')));
});
