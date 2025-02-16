"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidPayKey = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class AndroidPayKey extends base_1.Base {
    static find({ session, id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: {},
            });
            return result ? result[0] : null;
        });
    }
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
}
exports.AndroidPayKey = AndroidPayKey;
AndroidPayKey.API_VERSION = types_1.ApiVersion.January22;
AndroidPayKey.NAME = 'android_pay_key';
AndroidPayKey.PLURAL_NAME = 'android_pay_keys';
AndroidPayKey.HAS_ONE = {};
AndroidPayKey.HAS_MANY = {};
AndroidPayKey.PATHS = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "android_pay_keys.json" }
];
//# sourceMappingURL=android_pay_key.js.map