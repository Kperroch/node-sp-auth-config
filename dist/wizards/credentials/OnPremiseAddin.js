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
    var onPremiseAddinCredentials = authContext.authOptions;
    var promptFor = [
        {
            name: 'clientId',
            message: 'clientId',
            type: 'input',
            default: onPremiseAddinCredentials.clientId,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'issuerId',
            message: 'issuerId',
            type: 'input',
            default: onPremiseAddinCredentials.issuerId,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'realm',
            message: 'realm',
            type: 'input',
            default: onPremiseAddinCredentials.realm,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'rsaPrivateKeyPath',
            message: 'rsaPrivateKeyPath',
            type: 'input',
            default: onPremiseAddinCredentials.rsaPrivateKeyPath,
            validate: function (answer) { return answer.length > 0; }
        }, {
            name: 'shaThumbprint',
            message: 'shaThumbprint',
            type: 'input',
            default: onPremiseAddinCredentials.shaThumbprint,
            validate: function (answer) { return answer.length > 0; }
        }
    ];
    return inquirer.prompt(promptFor).then(function (answers) {
        return __assign({}, answersAll, answers);
    });
};
exports.default = wizard;
//# sourceMappingURL=OnPremiseAddin.js.map