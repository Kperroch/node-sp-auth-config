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
var wizard = function (authContext, answersAll, _settings) {
    if (answersAll === void 0) { answersAll = {}; }
    if (_settings === void 0) { _settings = {}; }
    var promptFor = [];
    promptFor = [{
            name: 'siteUrl',
            message: 'SharePoint URL',
            type: 'string',
            default: authContext.siteUrl,
            validate: function (answer) {
                if (answer.length === 0) {
                    return false;
                }
                return true;
            }
        }];
    console.log('');
    return inquirer.prompt(promptFor).then(function (answers) {
        return __assign({}, answersAll, answers);
    });
};
exports.default = wizard;
//# sourceMappingURL=siteUrl.js.map