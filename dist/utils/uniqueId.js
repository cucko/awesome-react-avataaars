"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueId = void 0;
var uuid_1 = require("uuid");
var getUniqueId = function (prefix) {
    if (prefix === void 0) { prefix = ''; }
    return "".concat(prefix).concat((0, uuid_1.v4)());
};
exports.getUniqueId = getUniqueId;
