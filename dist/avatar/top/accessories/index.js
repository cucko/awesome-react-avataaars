"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Blank_1 = require("./Blank");
var Kurt_1 = require("./Kurt");
var Prescription01_1 = require("./Prescription01");
var Prescription02_1 = require("./Prescription02");
var Round_1 = require("./Round");
var Sunglasses_1 = require("./Sunglasses");
var Wayfarers_1 = require("./Wayfarers");
var options_1 = require("../../../options");
var Accessories = /** @class */ (function (_super) {
    __extends(Accessories, _super);
    function Accessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accessories.prototype.render = function () {
        return (React.createElement(options_1.Selector, __assign({ optionMeta: options_1.AccessoriesOption, defaultOption: Blank_1.default }, this.props),
            React.createElement(Blank_1.default, null),
            React.createElement(Kurt_1.default, null),
            React.createElement(Prescription01_1.default, null),
            React.createElement(Prescription02_1.default, null),
            React.createElement(Round_1.default, null),
            React.createElement(Sunglasses_1.default, null),
            React.createElement(Wayfarers_1.default, null)));
    };
    return Accessories;
}(React.Component));
exports.default = Accessories;
