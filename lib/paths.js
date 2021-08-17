"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRelativeImportPath = exports.removeExtension = void 0;
const path_1 = require("path");
const slash_1 = __importDefault(require("slash"));
function removeExtension(location) {
    return location.substr(0, location.length - path_1.extname(location).length);
}
exports.removeExtension = removeExtension;
function toRelativeImportPath(directory, from, to) {
    from = removeExtension(from);
    to = removeExtension(to);
    const fromLocation = path_1.join(directory, from);
    const toLocation = path_1.join(directory, to);
    const relativePath = slash_1.default(path_1.relative(path_1.dirname(fromLocation), toLocation));
    if (relativePath === to) {
        return `./${relativePath}`;
    }
    if (path_1.isAbsolute(relativePath) || relativePath.startsWith('.')) {
        return relativePath;
    }
    return `./${relativePath}`;
}
exports.toRelativeImportPath = toRelativeImportPath;
//# sourceMappingURL=paths.js.map