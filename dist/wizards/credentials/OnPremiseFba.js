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
var utils_1 = require("../../utils");
var wizard = function (authContext, answersAll, _settings) {
    if (answersAll === void 0) { answersAll = {}; }
    if (_settings === void 0) { _settings = {}; }
    var onPremiseFbaCredentials = authContext.authOptions;
    var promptFor = [
        {
            name: 'username',
            message: 'User name',
            type: 'input',
            default: onPremiseFbaCredentials.username,
            validate: function (answer) {
                if (answer.length === 0) {
                    return false;
                }
                return true;
            }
        }, {
            name: 'password',
            message: 'Password',
            type: 'password',
            default: onPremiseFbaCredentials.password ? utils_1.defaultPasswordMask : null,
            validate: function (answer) {
                if (answer.length === 0) {
                    return false;
                }
                return true;
            }
        }
    ];
    return inquirer.prompt(promptFor).then(function (answers) {
        return __assign({}, answersAll, answers, { password: answers.password === utils_1.defaultPasswordMask
                ? onPremiseFbaCredentials.password
                : answers.password }, {
            fba: true
        });
    });
};
exports.default = wizard;
//# sourceMappingURL=OnPremiseFba.js.map