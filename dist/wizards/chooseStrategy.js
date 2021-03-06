"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var config_1 = require("../config");
var utils_1 = require("../utils");
var wizard = function (authContext, answersAll, _settings) {
    if (answersAll === void 0) { answersAll = {}; }
    if (_settings === void 0) { _settings = {}; }
    var promptFor = [];
    var target = utils_1.isOnPrem(answersAll.siteUrl) ? 'OnPremise' : 'Online';
    var strategies = config_1.getStrategies().filter(function (strategy) {
        return strategy.target.indexOf(target) !== -1;
    });
    promptFor = [{
            name: 'strategy',
            message: 'Authentication strategy',
            type: 'list',
            choices: strategies.map(function (strategy) {
                return {
                    name: strategy.name,
                    value: strategy.id,
                    short: strategy.name
                };
            }),
            default: strategies.reduce(function (position, strategy, index) {
                if (authContext.strategy === strategy.id) {
                    position = index;
                }
                return position;
            }, 0)
        }];
    return inquirer.prompt(promptFor).then(function (answers) {
        return __assign({}, answersAll, answers);
    });
};
exports.default = wizard;
//# sourceMappingURL=chooseStrategy.js.map