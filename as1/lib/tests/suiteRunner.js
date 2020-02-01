"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestSuites = function (suites) {
    suites.forEach(function (suite) {
        describe("Testing VALID [" + suite.name + "s]", function () {
            return suite.cases
                .filter(function (i) { return i.expected === true; })
                .forEach(function (i) {
                return test(i.value + " => " + i.expected, function () {
                    return expect(suite.func(i.value)).toBe(i.expected);
                });
            });
        });
        describe("Testing INVALID [" + suite.name + "s]", function () {
            return suite.cases
                .filter(function (i) { return i.expected === true; })
                .forEach(function (i) {
                return test(i.value + " => " + i.expected, function () {
                    return expect(suite.func(i.value)).toBe(i.expected);
                });
            });
        });
    });
};
