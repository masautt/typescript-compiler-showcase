"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var main_1 = require("./tokens/main");
fs_1.readFile('./input.txt', 'utf8', function (err, data) {
    console.log(main_1.getTokens(data.split(' ')));
});
