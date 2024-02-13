"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathName = void 0;
const path_1 = __importDefault(require("path"));
const getPathName = (props) => {
    const { isDev } = props;
    return isDev
        ? `${path_1.default.resolve('.')}\\example`
        : path_1.default.resolve('.');
};
exports.getPathName = getPathName;
