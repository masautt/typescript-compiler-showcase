"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
fs_1.readFile('./input.txt', 'utf8', function (err, data) {
    console.log(data.split(' '));
});
