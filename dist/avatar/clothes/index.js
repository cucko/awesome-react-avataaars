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
var options_1 = require("../../options");
var BlazerShirt_1 = require("./BlazerShirt");
var BlazerSweater_1 = require("./BlazerSweater");
var CollarSweater_1 = require("./CollarSweater");
var GraphicShirt_1 = require("./GraphicShirt");
var Hoodie_1 = require("./Hoodie");
var Overall_1 = require("./Overall");
var ShirtCrewNeck_1 = require("./ShirtCrewNeck");
var ShirtScoopNeck_1 = require("./ShirtScoopNeck");
var ShirtVNeck_1 = require("./ShirtVNeck");
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothes.prototype.render = function () {
        return (React.createElement(options_1.Selector, __assign({ optionMeta: options_1.ClotheOption, defaultOption: BlazerShirt_1.default }, this.props),
            React.createElement(BlazerShirt_1.default, null),
            React.createElement(BlazerSweater_1.default, null),
            React.createElement(CollarSweater_1.default, null),
            React.createElement(GraphicShirt_1.default, null),
            React.createElement(Hoodie_1.default, null),
            React.createElement(Overall_1.default, null),
            React.createElement(ShirtCrewNeck_1.default, null),
            React.createElement(ShirtScoopNeck_1.default, null),
            React.createElement(ShirtVNeck_1.default, null)));
    };
    return Clothes;
}(React.Component));
exports.default = Clothes;
