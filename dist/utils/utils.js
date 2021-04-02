"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseContent = void 0;
function parseContent(content, createTask) {
    var _a, _b, _c, _d;
    createTask("a", "z");
    var match;
    var regExp = /TODO\((?<username>\w+)\): (?<task>\w+)/g;
    while ((match = regExp.exec(content)) !== null) {
        var username = (_b = (_a = match.groups) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : "";
        var task = (_d = (_c = match.groups) === null || _c === void 0 ? void 0 : _c.task) !== null && _d !== void 0 ? _d : "TBD";
        createTask(username, task);
    }
}
exports.parseContent = parseContent;
