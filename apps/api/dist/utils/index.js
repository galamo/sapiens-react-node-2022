"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestId = void 0;
function generateRequestId() {
    return Date.now() + Math.ceil(Math.random() * 9999);
}
exports.generateRequestId = generateRequestId;
