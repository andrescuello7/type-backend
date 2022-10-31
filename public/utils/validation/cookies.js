"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmCookie = exports.setCookie = exports.getCookie = void 0;
const express_1 = __importDefault(require("express"));
let req = (0, express_1.default)().request;
let res = (0, express_1.default)().response;
const getCookie = () => {
    return req.cookies;
};
exports.getCookie = getCookie;
const setCookie = (key, value) => {
    res.cookie(key, value), { maxAge: 30000 };
    return "set cookie ok";
};
exports.setCookie = setCookie;
const rmCookie = (key) => {
    res.clearCookie(key);
    return "remove cookie ok";
};
exports.rmCookie = rmCookie;
//# sourceMappingURL=cookies.js.map