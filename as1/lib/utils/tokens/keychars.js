"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var separators_1 = require("./separators");
var operators_1 = require("./operators");
var keychars = __spreadArrays(separators_1.separators.map(function (separator) { return ({
    value: separator,
    type: 'separator'
}); }), operators_1.operators.map(function (operator) { return ({
    value: operator,
    type: 'operator'
}); }));
var keycharsArr = __spreadArrays(separators_1.separators, operators_1.operators);
exports.isKeychar = function (char) { return keycharsArr.includes(char); };
exports.hasKeychar = function (word) { return keycharsArr.some(function (char) { return word.includes(char); }); };
exports.findKeychars = function (word) {
    var isFound = false;
    var foundKeychars = [];
    word.split('').forEach(function (char, index) {
        var _a, _b;
        if (exports.isKeychar(char)) {
            isFound = true;
            var foundKeychar = keychars.find(function (keychar) { return keychar.value === char; });
            foundKeychars.push({
                value: (_a = foundKeychar) === null || _a === void 0 ? void 0 : _a.value,
                type: (_b = foundKeychar) === null || _b === void 0 ? void 0 : _b.type,
                index: index
            });
        }
    });
    return {
        isFound: isFound,
        foundKeychars: foundKeychars
    };
};
