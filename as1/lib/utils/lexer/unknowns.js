"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _exports_1 = require("../tokens/_exports");
var _exports_2 = require("./_exports");
exports.hasUnknowns = function (tokens) {
    return tokens.filter(function (t) { return t.type === 'unknown'; }).length !== 0;
};
exports.getUnknowns = function (tokens) {
    tokens.forEach(function (token, i) {
        if (token.type === 'unknown') {
            tokens.splice(i, 1);
            _exports_2.getTokens(cleanUnknown(token)).forEach(function (unknownToken) {
                tokens.splice(i, 0, unknownToken);
                i++;
            });
        }
    });
    return tokens;
};
var cleanUnknown = function (token) {
    var cleaned = [];
    token.value
        .split('')
        .forEach(function (c) { return (_exports_1.isKeychar(c) ? cleaned.push(' ', c, ' ') : cleaned.push(c)); });
    return cleaned
        .join('')
        .split(' ')
        .filter(function (e) { return e !== ''; });
};
