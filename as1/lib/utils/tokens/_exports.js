"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keywords_1 = require("./keywords");
exports.isKeyword = keywords_1.isKeyword;
exports.hasKeyword = keywords_1.hasKeyword;
var operators_1 = require("./operators");
exports.isOperator = operators_1.isOperator;
exports.hasOperator = operators_1.hasOperator;
var separators_1 = require("./separators");
exports.isSeparator = separators_1.isSeparator;
exports.hasSeparator = separators_1.hasSeparator;
var identifiers_1 = require("./identifiers");
exports.isValidIdentifier = identifiers_1.isValidIdentifier;
var realnums_1 = require("./realnums");
exports.isRealnum = realnums_1.isRealnum;
var keychars_1 = require("./keychars");
exports.isKeychar = keychars_1.isKeychar;
exports.hasKeychar = keychars_1.hasKeychar;
exports.findKeychars = keychars_1.findKeychars;
