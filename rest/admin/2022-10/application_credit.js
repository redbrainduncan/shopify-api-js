"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCredit = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class ApplicationCredit extends base_1.Base {
    static find({ session, id, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: { "fields": fields },
            });
            return result ? result[0] : null;
        });
    }
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
exports.ApplicationCredit = ApplicationCredit;
ApplicationCredit.API_VERSION = types_1.ApiVersion.October22;
ApplicationCredit.NAME = 'application_credit';
ApplicationCredit.PLURAL_NAME = 'application_credits';
ApplicationCredit.HAS_ONE = {};
ApplicationCredit.HAS_MANY = {};
ApplicationCredit.PATHS = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "application_credits.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "application_credits/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "application_credits.json" }
];
//# sourceMappingURL=application_credit.js.map