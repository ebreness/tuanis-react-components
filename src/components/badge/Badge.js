"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var React = require("react");
require("./Badge.css");
/**
 * Badge component to display labels with customizable styles.
 * @param variant The shape of the badge. 'capsule' for pill-like, 'dot' for a small circular badge.
 * @param color The background color of the badge. When variant is 'dot' this parameter represents the dot color.
 * @param children The content of the badge, typically a <span> element.
 * @param borderRadius The border-radius of the badge when variant is 'capsule'. Defaults to 1rem.
 * @param rest Additional props passed to the badge element.
 * @constructor
 * @example
 * ```js
 * import { Badge } from "@tuanis/react-components";
 * <Badge variant="dot" bgColor="#FF0000"><span>Text</span></Badge>
 * ```
 */
var Badge = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'capsule' : _b, color = _a.color, children = _a.children, borderRadius = _a.borderRadius, rest = __rest(_a, ["variant", "color", "children", "borderRadius"]);
    var cssVariables = {
        '--trc-badge-color': color,
        '--trc-badge-border-radius': borderRadius
    };
    return (React.createElement("div", __assign({ className: "trc-badge trc-".concat(variant), style: cssVariables }, rest), children));
};
exports.Badge = Badge;
