"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectArray = exports.isObject = void 0;
function isObject(data) {
    if (data === null) {
        return false;
    }
    return Object.prototype.toString.call(data) === "[object Object]";
}
exports.isObject = isObject;
function isObjectArray(data) {
    if (Array.isArray(data) && data.length > 0) {
        return data.map(isObject).length === data.length;
    }
    return false;
}
exports.isObjectArray = isObjectArray;
//# sourceMappingURL=index.js.map