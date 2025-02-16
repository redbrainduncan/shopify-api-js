"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbandonedCheckout = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const currency_1 = require("./currency");
const customer_1 = require("./customer");
const discount_code_1 = require("./discount_code");
class AbandonedCheckout extends base_1.Base {
    static checkouts(_a) {
        var { session, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, status = null, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "status", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "checkouts",
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "status": status, "limit": limit }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.AbandonedCheckout = AbandonedCheckout;
AbandonedCheckout.API_VERSION = types_1.ApiVersion.April22;
AbandonedCheckout.NAME = 'abandoned_checkout';
AbandonedCheckout.PLURAL_NAME = 'abandoned_checkouts';
AbandonedCheckout.HAS_ONE = {
    "currency": currency_1.Currency,
    "customer": customer_1.Customer
};
AbandonedCheckout.HAS_MANY = {
    "discount_codes": discount_code_1.DiscountCode
};
AbandonedCheckout.PATHS = [
    { "http_method": "get", "operation": "checkouts", "ids": [], "path": "checkouts.json" },
    { "http_method": "get", "operation": "checkouts", "ids": [], "path": "checkouts.json" }
];
//# sourceMappingURL=abandoned_checkout.js.map