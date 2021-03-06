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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var cpass_1 = require("cpass");
var spauth = require("node-sp-auth");
var utils_1 = require("./utils");
var env_1 = require("./utils/env");
var siteUrl_1 = require("./wizards/siteUrl");
var chooseStrategy_1 = require("./wizards/chooseStrategy");
var askCredentials_1 = require("./wizards/askCredentials");
var saveOnDisk_1 = require("./wizards/saveOnDisk");
var config_1 = require("./config");
var AuthConfig = (function () {
    function AuthConfig(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        this.getContext = function () { return __awaiter(_this, void 0, void 0, function () {
            var checkPromptsResponse, authContext, answersResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.checkForPrompts()];
                    case 1:
                        checkPromptsResponse = _a.sent();
                        authContext = __assign({}, checkPromptsResponse.authContext, { settings: this.settings });
                        if (!!checkPromptsResponse.needPrompts) return [3, 4];
                        if (!checkPromptsResponse.needSave) return [3, 3];
                        return [4, utils_1.saveConfigOnDisk(authContext, this.settings)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2, authContext];
                    case 4: return [4, siteUrl_1.default(authContext, {}, this.settings)];
                    case 5:
                        answersResult = _a.sent();
                        return [4, chooseStrategy_1.default(authContext, answersResult, this.settings)];
                    case 6:
                        answersResult = _a.sent();
                        return [4, askCredentials_1.default(authContext, answersResult, this.settings)];
                    case 7:
                        answersResult = _a.sent();
                        if (typeof this.customData !== 'undefined') {
                            answersResult.custom = this.customData;
                        }
                        return [4, saveOnDisk_1.default(authContext, answersResult, this.settings)];
                    case 8:
                        answersResult = _a.sent();
                        return [2, utils_1.convertSettingsToAuthContext(answersResult, this.settings)];
                }
            });
        }); };
        this.tryAuth = function (authContext) {
            return spauth.getAuth(authContext.siteUrl, authContext.authOptions);
        };
        this.checkForPrompts = function () { return __awaiter(_this, void 0, void 0, function () {
            var checkPromptsObject, checkPrompts, needPrompts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkPromptsObject = {
                            needPrompts: true,
                            needSave: false
                        };
                        return [4, this.runCheckForPrompts(checkPromptsObject)];
                    case 1:
                        checkPrompts = _a.sent();
                        needPrompts = this.settings.headlessMode ? false : checkPrompts.needPrompts;
                        return [2, __assign({}, checkPrompts, { needPrompts: needPrompts })];
                }
            });
        }); };
        this.runCheckForPrompts = function (checkObject) { return __awaiter(_this, void 0, void 0, function () {
            var checkObj, _a, exists, jsonRawData, authPropsFromEnvVariables, mergeAuthProps, mainCustom, mainProps, _b, custom, props, _c, mainCustom, mainProps, custom, props, withPassword, strategies, passwordPropertyName, initialPassword, decodedPassword, ex_1;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        checkObj = __assign({}, checkObject);
                        _a = this.getJsonContent(this.settings.configPath, this.settings.authOptions), exists = _a.exists, jsonRawData = _a.jsonRawData;
                        checkObj.needPrompts = !exists;
                        checkObj.jsonRawData = jsonRawData;
                        if (typeof this.settings.defaultConfigPath !== 'undefined') {
                            checkObj.jsonRawData = __assign({}, this.getJsonContent(this.settings.defaultConfigPath).jsonRawData, checkObj.jsonRawData);
                        }
                        authPropsFromEnvVariables = env_1.getConfigFromEnvVariables();
                        if (authPropsFromEnvVariables) {
                            checkObj.needPrompts = false;
                            mergeAuthProps = function (_a) {
                                var props = _a.props, custom = _a.custom, mainCustom = _a.mainCustom, mainProps = _a.mainProps;
                                checkObj.jsonRawData = __assign({}, props, { custom: __assign({}, custom || {}, mainCustom || {}) }, mainProps);
                            };
                            if (process.env.SPAUTH_FORCE === 'true') {
                                mainCustom = authPropsFromEnvVariables.custom, mainProps = __rest(authPropsFromEnvVariables, ["custom"]);
                                _b = checkObj.jsonRawData, custom = _b.custom, props = __rest(_b, ["custom"]);
                                mergeAuthProps({ props: props, custom: custom, mainCustom: mainCustom, mainProps: mainProps });
                            }
                            else {
                                _c = checkObj.jsonRawData, mainCustom = _c.custom, mainProps = __rest(_c, ["custom"]);
                                custom = authPropsFromEnvVariables.custom, props = __rest(authPropsFromEnvVariables, ["custom"]);
                                mergeAuthProps({ props: props, custom: custom, mainCustom: mainCustom, mainProps: mainProps });
                            }
                        }
                        this.context = checkObj.jsonRawData;
                        strategies = this.strategies.filter(function (strategy) {
                            return strategy.id === _this.context.strategy;
                        });
                        passwordPropertyName = utils_1.getHiddenPropertyName(this.context);
                        if (strategies.length === 1) {
                            withPassword = strategies[0].withPassword;
                        }
                        else {
                            withPassword = typeof this.context[passwordPropertyName] !== 'undefined';
                        }
                        if (withPassword) {
                            initialPassword = "" + (this.context[passwordPropertyName] || '');
                            if (!this.context[passwordPropertyName]) {
                                checkObj.needPrompts = true;
                            }
                            else {
                                this.context[passwordPropertyName] = this.cpass.decode(this.context[passwordPropertyName]);
                                decodedPassword = this.context[passwordPropertyName];
                                if (initialPassword === decodedPassword && this.settings.encryptPassword && this.settings.saveConfigOnDisk) {
                                    checkObj.needSave = true;
                                }
                            }
                        }
                        checkObj.authContext = utils_1.convertSettingsToAuthContext(this.context);
                        if (this.settings.forcePrompts === true) {
                            checkObj.needPrompts = true;
                        }
                        if (!(strategies.length === 1)) return [3, 1];
                        if (!checkObj.needPrompts) {
                            checkObj.needPrompts = !strategies[0].verifyCallback(this.context.siteUrl, this.context);
                        }
                        return [2, checkObj];
                    case 1:
                        if (!checkObj.needPrompts) return [3, 2];
                        return [2, checkObj];
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4, this.tryAuth(checkObj.authContext)];
                    case 3:
                        _d.sent();
                        return [3, 5];
                    case 4:
                        ex_1 = _d.sent();
                        checkObj.needPrompts = true;
                        return [3, 5];
                    case 5: return [2, checkObj];
                }
            });
        }); };
        this.getJsonContent = function (filePath, jsonData) {
            if (typeof jsonData === 'undefined') {
                var exists = fs.existsSync(filePath);
                var jsonRawData = {};
                if (exists) {
                    try {
                        jsonRawData = require(filePath);
                    }
                    catch (ex) { }
                }
                if (typeof jsonRawData.custom !== 'undefined') {
                    _this.customData = jsonRawData.custom;
                    delete jsonRawData.custom;
                }
                return { exists: exists, jsonRawData: jsonRawData };
            }
            else {
                return { exists: true, jsonRawData: jsonData };
            }
        };
        this.strategies = config_1.getStrategies();
        var envMode = process.env.SPAUTH_ENV || process.env.NODE_ENV;
        var headlessMode = typeof settings.headlessMode !== 'undefined'
            ? settings.headlessMode
            : envMode === 'production';
        this.settings = __assign({}, settings, { configPath: path.resolve(settings.configPath || './config/private.json'), encryptPassword: typeof settings.encryptPassword !== 'undefined' ? settings.encryptPassword : true, saveConfigOnDisk: typeof settings.saveConfigOnDisk !== 'undefined' ? settings.saveConfigOnDisk : true, headlessMode: headlessMode });
        if (typeof this.settings.encryptPassword === 'string') {
            this.settings.encryptPassword = !(this.settings.encryptPassword.toLowerCase() === 'false');
        }
        if (process.env.AUTH_MASTER_KEY && !this.settings.masterKey) {
            this.settings.masterKey = process.env.AUTH_MASTER_KEY;
        }
        this.cpass = new cpass_1.Cpass(this.settings.masterKey);
    }
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
//# sourceMappingURL=index.js.map