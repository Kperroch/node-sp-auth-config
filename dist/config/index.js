"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spauth = require("node-sp-auth");
exports.getTargetsTypes = function () {
    return ['Online', 'OnPremise'];
};
exports.getStrategies = function () {
    var strategies = [
        {
            id: 'OnpremiseUserCredentials',
            name: 'User credentials (NTLM)',
            withPassword: true,
            target: ['OnPremise'],
            verifyCallback: spauth.isUserCredentialsOnpremise
        }, {
            id: 'OnpremiseFbaCredentials',
            name: 'Form-based authentication (FBA)',
            withPassword: true,
            target: ['OnPremise'],
            verifyCallback: spauth.isFbaCredentialsOnpremise
        }, {
            id: 'OnpremiseTmgCredentials',
            name: 'Forefront TMG authentication',
            withPassword: true,
            target: ['OnPremise'],
            verifyCallback: spauth.isTmgCredentialsOnpremise
        }, {
            id: 'OnPremiseAddinCredentials',
            name: 'Add-In only permissions',
            withPassword: false,
            target: ['OnPremise'],
            verifyCallback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return spauth.isAddinOnlyOnpremise(args[1]);
            }
        }, {
            id: 'UserCredentials',
            name: 'User credentials (SAML)',
            withPassword: true,
            target: ['Online'],
            verifyCallback: spauth.isUserCredentialsOnline
        }, {
            id: 'OnlineAddinCredentials',
            name: 'Add-In only permissions',
            withPassword: true,
            target: ['Online'],
            verifyCallback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return spauth.isAddinOnlyOnline(args[1]);
            }
        }, {
            id: 'OnlineAppCert',
            name: 'Add-In only permissions',
            withPassword: true,
            target: ['Online'],
            verifyCallback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return spauth.isAppCertOnline(args[1]);
            }
        }, {
            id: 'AdfsUserCredentials',
            name: 'ADFS user credentials',
            withPassword: true,
            target: ['Online', 'OnPremise'],
            verifyCallback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return spauth.isAdfsCredentials(args[1]);
            }
        }, {
            id: 'OnDemandCredentials',
            name: 'On-demand credentials',
            withPassword: false,
            target: ['Online', 'OnPremise'],
            verifyCallback: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return spauth.isOndemandCredentials(args[1]);
            }
        }
    ];
    return strategies;
};
//# sourceMappingURL=index.js.map