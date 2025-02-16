"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeprecatedApiCall = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class DeprecatedApiCall extends base_1.Base {
    static all(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.DeprecatedApiCall = DeprecatedApiCall;
DeprecatedApiCall.API_VERSION = types_1.ApiVersion.January23;
DeprecatedApiCall.NAME = 'deprecated_api_call';
DeprecatedApiCall.PLURAL_NAME = 'deprecated_api_calls';
DeprecatedApiCall.HAS_ONE = {};
DeprecatedApiCall.HAS_MANY = {};
DeprecatedApiCall.PATHS = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "deprecated_api_calls.json" }
];
//# sourceMappingURL=deprecated_api_call.js.map