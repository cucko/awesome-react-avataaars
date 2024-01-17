"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionContextProvider = exports.OptionContext = void 0;
var React = require("react");
exports.OptionContext = React.createContext({});
var OptionContextProvider = function (_a) {
    var children = _a.children, options = _a.options;
    return (React.createElement(exports.OptionContext.Provider, { value: {
            options: options,
        } }, children));
};
exports.OptionContextProvider = OptionContextProvider;
exports.default = exports.OptionContext;
