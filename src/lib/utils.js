"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = void 0;
var cn = function (classes, names) {
    // filter out any undefined or null values in case a class name does not exist in the classes object
    return names
        .split(' ')
        .map(function (name) { return classes[name]; })
        .filter(Boolean)
        .join(' ');
};
exports.cn = cn;
