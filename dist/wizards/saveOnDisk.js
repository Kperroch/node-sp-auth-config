"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var utils_1 = require("../utils");
var wizard = function (_authContext, answersAll, settings) {
    if (answersAll === void 0) { answersAll = {}; }
    if (settings === void 0) { settings = {}; }
    if (typeof settings.saveConfigOnDisk === 'undefined') {
        var promptFor = [{
                name: 'save',
                message: 'Save on disk?',
                type: 'confirm'
            }];
        return inquirer.prompt(promptFor).then(function (answers) {
            if (answers.save) {
                return utils_1.saveConfigOnDisk(utils_1.convertSettingsToAuthContext(answersAll), settings).then(function () { return answersAll; });
            }
            else {
                return answersAll;
            }
        });
    }
    else if (settings.saveConfigOnDisk) {
        return utils_1.saveConfigOnDisk(utils_1.convertSettingsToAuthContext(answersAll), settings).then(function () { return answersAll; });
    }
    else {
        return Promise.resolve(answersAll);
    }
};
exports.default = wizard;
//# sourceMappingURL=saveOnDisk.js.map