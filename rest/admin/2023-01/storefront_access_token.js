"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorefrontAccessToken = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class StorefrontAccessToken extends base_1.Base {
    static delete({ session, id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
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
exports.StorefrontAccessToken = StorefrontAccessToken;
StorefrontAccessToken.API_VERSION = types_1.ApiVersion.January23;
StorefrontAccessToken.NAME = 'storefront_access_token';
StorefrontAccessToken.PLURAL_NAME = 'storefront_access_tokens';
StorefrontAccessToken.HAS_ONE = {};
StorefrontAccessToken.HAS_MANY = {};
StorefrontAccessToken.PATHS = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "storefront_access_tokens/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "storefront_access_tokens.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "storefront_access_tokens.json" }
];
//# sourceMappingURL=storefront_access_token.js.map