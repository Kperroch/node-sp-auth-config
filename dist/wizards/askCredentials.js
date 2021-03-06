"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OnPremiseAddin_1 = require("./credentials/OnPremiseAddin");
var OnPremiseUser_1 = require("./credentials/OnPremiseUser");
var OnPremiseTmg_1 = require("./credentials/OnPremiseTmg");
var OnPremiseFba_1 = require("./credentials/OnPremiseFba");
var OnlineAddin_1 = require("./credentials/OnlineAddin");
var OnlineUser_1 = require("./credentials/OnlineUser");
var AdfsUser_1 = require("./credentials/AdfsUser");
var OnDemand_1 = require("./credentials/OnDemand");
var wizard = function (authContext, answersAll, _settings) {
    if (answersAll === void 0) { answersAll = {}; }
    if (_settings === void 0) { _settings = {}; }
    var answers;
    switch (answersAll.strategy) {
        case 'OnPremiseAddinCredentials':
            answers = OnPremiseAddin_1.default(authContext, answersAll);
            break;
        case 'OnpremiseUserCredentials':
            answers = OnPremiseUser_1.default(authContext, answersAll);
            break;
        case 'OnpremiseTmgCredentials':
            answers = OnPremiseTmg_1.default(authContext, answersAll);
            break;
        case 'OnpremiseFbaCredentials':
            answers = OnPremiseFba_1.default(authContext, answersAll);
            break;
        case 'OnlineAddinCredentials':
            answers = OnlineAddin_1.default(authContext, answersAll);
            break;
        case 'UserCredentials':
            answers = OnlineUser_1.default(authContext, answersAll);
            break;
        case 'AdfsUserCredentials':
            answers = AdfsUser_1.default(authContext, answersAll);
            break;
        case 'OnDemandCredentials':
            answers = OnDemand_1.default(authContext, answersAll);
            break;
        default:
            answers = Promise.resolve(answersAll);
            break;
    }
    return answers;
};
exports.default = wizard;
//# sourceMappingURL=askCredentials.js.map