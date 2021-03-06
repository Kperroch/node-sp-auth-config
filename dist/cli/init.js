"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors");
var path = require("path");
var index_1 = require("../index");
exports.init = function (options) {
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
        saveConfigOnDisk: true,
        forcePrompts: true,
        masterKey: options.masterkey
    });
    return authConfig.getContext()
        .then(function (_) {
        console.log("\n" + colors.green('File saved to') + " " + colors.cyan(path.resolve(options.path)));
    })
        .catch(function (error) {
        console.log('Error:', error);
    });
};
//# sourceMappingURL=init.js.map