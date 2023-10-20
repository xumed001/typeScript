"use strict";
// Literal types
let userName;
userName = 'Dave';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello TS!');
logMsg(add(5, 6));
let multiply = (x, y) => (x * y);
logMsg(multiply(4, 4));
// optional parameters
const addALl = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addALl(1, 2));
// default para
const sumALl = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumALl(undefined, 1));
// Rest Para
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// Never type & void
const createError = (errMsg) => {
    throw new Error(errMsg);
};
