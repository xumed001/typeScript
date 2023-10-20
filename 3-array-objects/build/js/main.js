"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'four';
let test = [];
// array of strings only
let bands = [];
// tuple
let myTuple = ['Dave', 42, true];
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
let firstObj = {
    name: 'Dave',
    active: true,
    things: ['abc', 'def', 1, 2]
};
function greet(person) {
    if (person.name) {
        return `Hello ${person.name.toUpperCase()}`;
    }
    return 'Hello!';
}
console.log(greet(firstObj));
//enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
