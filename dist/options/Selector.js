"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OptionContext_1 = require("./OptionContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
var Selector = function (_a) {
    var optionMeta = _a.optionMeta, children = _a.children, _b = _a.renderPieceOnly, renderPieceOnly = _b === void 0 ? false : _b, pieceDescription = _a.pieceDescription;
    var options = React.useContext(OptionContext_1.OptionContext).options;
    var avatarCondition = options ? options[optionMeta.key] : '';
    var pieceOnlyCondition = pieceDescription
        ? pieceDescription[optionMeta['_key']]
        : '';
    var value = renderPieceOnly ? pieceOnlyCondition : avatarCondition;
    var result = null;
    //todo: default option
    value &&
        React.Children.forEach(children, function (child) {
            if (getComponentOptionValue(child.type) === value) {
                result = child;
            }
        });
    return result;
};
exports.default = Selector;
