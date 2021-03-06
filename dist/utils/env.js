"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authPropsMapping = {
    siteurl: 'siteUrl',
    strategy: 'strategy',
    username: 'username',
    password: 'password',
    relyingparty: 'relyingParty',
    adfsurl: 'adfsUrl',
    adfscookie: 'adfsCookie',
    ondemand: 'ondemand',
    clientid: 'clientId',
    clientsecret: 'clientSecret',
    issuerid: 'issuerId',
    realm: 'realm',
    rsaprivatekeypath: 'rsaPrivateKeyPath',
    shathumbprint: 'shaThumbprint',
    fba: 'fba',
    tmg: 'tmg',
    domain: 'domain'
};
exports.getConfigFromEnvVariables = function () {
    var prefix = 'SPAUTH_';
    var authProps = Object.keys(process.env)
        .filter(function (key) { return key.indexOf(prefix) === 0; })
        .reduce(function (res, key) {
        var authProp = authPropsMapping[key.replace(prefix, '').toLowerCase()];
        if (typeof authProp !== 'undefined') {
            res[authProp] = process.env[key];
        }
        if (authProp === 'custom') {
            try {
                res['custom'] = JSON.parse(process.env[key]);
            }
            catch (ex) { }
        }
        return res;
    }, {});
    if (Object.keys(authProps).length === 0) {
        return null;
    }
    return authProps;
};
//# sourceMappingURL=env.js.map