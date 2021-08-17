"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoaderCode = void 0;
const os_1 = require("os");
const path_1 = require("path");
const slash_1 = __importDefault(require("slash"));
function createLoaderCode(relativePath) {
    if (/win32/.test(os_1.platform()) && path_1.win32.isAbsolute(relativePath)) {
        relativePath = path_1.win32.normalize(relativePath);
        relativePath = relativePath.replace(/\\/g, '\\\\');
    }
    else {
        relativePath = slash_1.default(relativePath);
    }
    return `
    require('bytenode');
    require('${relativePath}');
  `;
}
exports.createLoaderCode = createLoaderCode;
//# sourceMappingURL=loader.js.map