"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdentifier = function (word) {
    return RegExp('^[a-zA-Z][a-zA-Z$0-9\$]*$').test(word);
};
