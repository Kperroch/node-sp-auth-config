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
    var adfsUserCredentials = authContext.authOptions;
    var promptFor = [
        {
            name: 'username',
            message: 'User name',
            type: 'input',
            default: adfsUserCredentials.username,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'password',
            message: 'Password',
            type: 'password',
            default: adfsUserCredentials.password ? utils_1.defaultPasswordMask : null,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'relyingParty',
            message: 'relyingParty',
            type: 'input',
            default: adfsUserCredentials.relyingParty || 'urn:sharepoint:portal',
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'adfsUrl',
            message: 'adfsUrl',
            type: 'input',
            default: adfsUserCredentials.adfsUrl,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'adfsCookie',
            message: 'adfsCookie',
            type: 'input',
            default: adfsUserCredentials.adfsCookie || 'FedAuth',
            validate: function (answer) { return answer.length > 0; }
        }
    ];
    return inquirer.prompt(promptFor).then(function (answers) {
        return __assign({}, answersAll, answers, { password: answers.password === utils_1.defaultPasswordMask
                ? adfsUserCredentials.password
                : answers.password });
    });
};
exports.default = wizard;
//# sourceMappingURL=AdfsUser.js.map