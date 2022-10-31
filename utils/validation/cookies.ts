import express from "express";

let req = express().request;
let res = express().response;

export const getCookie = () => {
    return req.cookies;
}

export const setCookie = (key: string, value: any) => {
    res.cookie(key, value), { maxAge: 30000 };
    return "set cookie ok";
}

export const rmCookie = (key: string) => {
    res.clearCookie(key);
    return "remove cookie ok";
}