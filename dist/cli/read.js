"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors");
var path = require("path");
var index_1 = require("../index");
exports.read = function (options) {
    if (typeof options.path === 'undefined') {
        console.log(colors.red("'" + colors.bold('-p, --path') + "' parameter should be provided"), colors.gray("(relative path to file which will store your credentials)"));
        process.exit();
    }
    var extension = path.extname(options.path);
    if (extension !== '.json') {
        console.log(colors.red("'" + colors.bold('--path') + "' file extension should to be .json"));
        process.exit();
    }
    var authConfig = new index_1.AuthConfig({
        configPath: options.path,
        encryptPassword: options.encrypt,
        saveConfigOnDisk: false,
        forcePrompts: false,
        headlessMode: true,
        masterKey: options.masterkey
    });
    return authConfig.getContext()
        .then(function (context) {
        var contextString = options.format ? JSON.stringify(context, null, 2) : JSON.stringify(context);
        console.log(contextString);
    })
        .catch(function (error) {
        console.log('Error:', error);
    });
};
//# sourceMappingURL=read.js.map