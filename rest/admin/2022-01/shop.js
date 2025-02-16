"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Shop extends base_1.Base {
    static all(_a) {
        var { session, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.Shop = Shop;
Shop.API_VERSION = types_1.ApiVersion.January22;
Shop.NAME = 'shop';
Shop.PLURAL_NAME = 'shops';
Shop.HAS_ONE = {};
Shop.HAS_MANY = {};
Shop.PATHS = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "shop.json" }
];
//# sourceMappingURL=shop.js.map