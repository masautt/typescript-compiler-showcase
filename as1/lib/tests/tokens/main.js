"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identifiers_1 = require("./data/identifiers");
var operators_1 = require("./data/operators");
var keywords_1 = require("./data/keywords");
var separators_1 = require("./data/separators");
exports.tokenTestSuites = [
    identifiers_1.identifierSuite,
    operators_1.operatorSuite,
    keywords_1.keywordSuite,
    separators_1.separatorSuite
];
