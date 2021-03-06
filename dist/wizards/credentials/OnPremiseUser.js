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
    var onPremiseUserCredentials = authContext.authOptions;
    var promptFor = [
        {
            name: 'username',
            message: 'User name',
            type: 'input',
            default: onPremiseUserCredentials.username,
            validate: function (answer) { return answer.length > 0; }
        }
    ];
    return inquirer.prompt(promptFor).then(function (answers) {
        answersAll = __assign({}, answersAll, answers);
        var noDomain = false;
        if (answers.username.indexOf('@') !== -1) {
            noDomain = true;
        }
        if (answers.username.indexOf('\\') !== -1) {
            noDomain = true;
            answers.username = answers.username.replace('\\\\', '\\');
            answersAll.domain = answers.username.split('\\')[0];
            answersAll.username = answers.username.split('\\')[1];
        }
        promptFor = [];
        if (!noDomain) {
            promptFor.push({
                name: 'domain',
                message: 'Domain',
                type: 'input',
                default: onPremiseUserCredentials.domain,
                validate: function (answer) { return answer.length > 0; }
            });
        }
        promptFor.push({
            name: 'password',
            message: 'Password',
            type: 'password',
            default: onPremiseUserCredentials.password ? utils_1.defaultPasswordMask : null,
            validate: function (answer) { return answer.length > 0; }
        });
        return inquirer.prompt(promptFor).then(function (answers) {
            answersAll = __assign({}, answersAll, answers, { password: answers.password === utils_1.defaultPasswordMask
                    ? onPremiseUserCredentials.password
                    : answers.password });
            return answersAll;
        });
    });
};
exports.default = wizard;
//# sourceMappingURL=OnPremiseUser.js.map